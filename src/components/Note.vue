<template>
  <div>
    <div v-if="!note.state" class="new-item">
      <button class="editbtn" role="button" @click="toggleEdit">
        <unicon name="edit" fill="#7dbf94" style="display:flex"></unicon>
      </button>
    </div>
    <div v-else class="new-item">
      <input type="text" placeholder="Add a new item" ref="newitem" @keyup.enter="addItem" />
      <button role="button" @click="addItem">
        <unicon name="plus" fill="#df815a" style="display:flex"></unicon>
      </button>
      <button role="button" @click="toggleEdit">
        <unicon name="save" fill="#639bb4" style="display:flex"></unicon>
      </button>
      <button role="button" @click="deleteNote()" class="delete-note">
        <unicon name="trash-alt" fill="#df815a"></unicon>
      </button>
    </div>
    <ul>
      <li v-for="(item, index) in note.content" :key="item.index">
        <p v-bind:class="{ checked: item.checked }" v-on:click="changeStatus(item)">{{ item.label }}</p>
        <unicon
          name="trash-alt"
          v-if="note.state"
          @click="deleteItem(index)"
          fill="#df815a"
          class="delete-item"
        ></unicon>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["note", "notes", "updateNote"],
  mounted() {
    this.$nextTick(() => this.$refs.newitem.focus());
  },
  methods: {
    toggleEdit() {
      this.note.state = !this.note.state;
    },
    addItem() {
      this.updateNote(this.$refs.newitem.value);
      this.$refs.newitem.value = "";
    },
    changeStatus(item) {
      item.checked = !item.checked;
    },

    deleteItem(index) {
      this.note.content.splice(index, 1);
    },
    deleteNote() {
      this.$emit("deleteNote");
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

.new-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

li {
  display: flex;
  flex-direction: row;
  margin: 20px 10px;
  cursor: pointer;
  font-size: 18px;
}

.checked {
  text-decoration: line-through;
  opacity: 0.5;
  font-size: 17px;
}

li p {
  margin: 5px;
  flex-grow: 1;
}

li.delete-item {
  flex-grow: 1;
}
</style>
