<template>
  <div id="app">
    <div class="notes-container">
      <div class="header">
        <h1>{{ header }}</h1>
        <button role="button" class="primary-btn" @click="addNote">
          <unicon name="plus" fill="#df815a" style="display:flex"></unicon>
        </button>
      </div>
      <notes :notes="notes"></notes>
      <p v-if="notes.length === 0" class="centeredtext">Nice job!</p>
    </div>
    <Notes />
  </div>
</template>

<script>
import Notes from "./components/Notes.vue";

export default {
  name: "App",
  components: {
    Notes,
  },
  data: () => ({
    header: "my notes",
    newItem: "",
    state: "default",
    notes: [
      {
        state: false,
        content: [
          { label: "Learn HTML", checked: true },
          { label: "Learn CSS", checked: true },
          { label: "Learn Javascript", checked: false },
        ],
      },
      {
        state: false,
        content: [
          { label: "Buy some coffee", checked: false },
          { label: "Learn Git", checked: false },
          { label: "Learn Vue", checked: false },
          { label: "Eat some cake", checked: false },
        ],
      },
      {
        state: false,
        content: [
          { label: "Create a new repository on Github", checked: false },
          { label: "Commit & push changes", checked: false },
        ],
      },
      {
        state: false,
        content: [
          { label: "Learn HTML", checked: true },
          { label: "Learn CSS", checked: true },
          { label: "Learn Javascript", checked: false },
        ],
      },
      {
        state: false,
        content: [
          { label: "Buy some coffee", checked: false },
          { label: "Learn Git", checked: false },
          { label: "Learn Vue", checked: false },
          { label: "Eat some cake", checked: false },
        ],
      },
      {
        state: false,
        content: [
          { label: "Create a new repository on Github", checked: false },
          { label: "Commit & push changes", checked: false },
        ],
      },
    ],
  }),

  methods: {
    addNote() {
      this.notes.push({
        state: true,
        content: [],
      });
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;

  color: rgba(144, 152, 168, 1);
  font-family: "IBM Plex Sans", sans-serif;
}

.notes-container {
  max-width: 70%;
  margin: auto;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin: 3px;
  box-shadow: 6px 6px 16px 0 rgba(217, 210, 200, 0.51),
    -6px -6px 16px 0 rgba(255, 255, 255, 0.76);
  border-radius: 50%;
  min-width: 47px;
  min-height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  box-shadow: inset 6px 6px 5px 0 rgba(217, 210, 200, 0.51),
    inset -6px -6px 5px 0 rgba(255, 255, 255, 0.76);
}

button:active:focus {
  box-shadow: inset 6px 6px 10px rgba(179, 191, 199, 0.5),
    inset -6px -6px 10px rgba(255, 255, 255, 0.6);
}

input {
  background-color: transparent;
  border: none;
  box-shadow: inset 6px 6px 10px rgba(179, 191, 199, 0.3),
    inset -6px -6px 10px rgba(255, 255, 255, 0.6);
  height: 35px;
  padding-left: 10px;
}

input::placeholder {
  font-family: "IBM Plex Sans", sans-serif;
}

.header {
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0 20px;
}

.centeredtext {
  text-align: center;
}

.header h1 {
  color: rgb(88, 88, 88);
  margin: 0;
  text-align: center;
  flex-grow: 2;
}
</style>
