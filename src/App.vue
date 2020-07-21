<template>
  <div id="app">
    <div class="shopping-list">
      <div class="header">
        <h1>{{ header }}</h1>
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
    Notes
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
          { label: "Learn Javascript", checked: false }
        ]
      },
      {
        state: false,
        content: [
          { label: "Buy some coffee", checked: false },
          { label: "Learn Git", checked: false },
          { label: "Learn Vue", checked: false },
          { label: "Eat some cake", checked: false }
        ]
      },
      {
        state: false,
        content: [
          { label: "Create a new repository on Github", checked: false },
          { label: "Commit & push changes", checked: false }
        ]
      }
    ]
  })
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

.shopping-list {
  max-width: 70%;
  height: 70vh;
  margin: auto;
  color: rgba(144, 152, 168, 1);
  font-family: "IBM Plex Sans", sans-serif;
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
  align-items: end;
  justify-content: center;
}

.notes {
  display: grid;
  grid-template-rows: max-content;
  margin-top: 20px;
}

.centeredtext {
  text-align: center;
}

.note-block {
  border-radius: 10px;
  padding: 20px;
  margin: 10px 20px;
  box-shadow: 6px 6px 16px 0 rgba(217, 210, 200, 0.51),
    -6px -6px 16px 0 rgba(255, 255, 255, 0.76);
  height: max-content;
}

.note-block ul {
  width: max-content;
}

.note-block .new-item {
  display: flex;
  justify-content: end;
  align-items: center;
}

.note-block li.checked {
  text-decoration: line-through;
  opacity: 0.5;
  font-size: 17px;
}

.header h1 {
  color: rgb(88, 88, 88);
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  cursor: pointer;
  font-size: 18px;
}
a {
  color: #42b983;
}

@media (min-width: 992px) {
  .notes {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
