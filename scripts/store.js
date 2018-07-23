'use strict';
/* global store, cuid, Item */

const store = (function () {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  const findById = function(id) {
    return items.find(element => element.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(e) {
      console.log(`Name is not valid: ${e.message}`);
    }
  };

  const findAndToggleChecked = function(id) {
    const matchedItem = this.findById(id);
    matchedItem.checked = !matchedItem.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      const matchedItem = this.findById(id);
      matchedItem.name = newName;
    } catch(e) {
      console.log(`Cannot update name: ${e.message}`);
    }
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(element => element.id !== id);
  };

  const toggleCheckedFilter = function () {
    this.items.checked = !this.items.checked;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    findById
  };

}() );

