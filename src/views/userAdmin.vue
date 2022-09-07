<template>
  <h1>RWD List to Table</h1>
  <table class="rwd-table">
    <tr>
      <th>User Id</th>
      <th>User Name</th>
      <th>User Last Name</th>
      <th>User Email</th>
      <th>User Role</th>
    </tr>
    <tbody v-if="users">
      <tr v-for="user in users" :key="user">
        <td>{{ user.user_id }}</td>
        <td>{{ user.user_name }}</td>
        <td>{{ user.user_lastname }}</td>
        <td>{{ user.email }}</td>
		<td>{{ user.user_role }}</td>
		<th scoped="col">
			<button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="'#updateUser'+user.user_id"
            data-bs-whatever="@mdo"
          >
            Edit
          </button>     

          <!-- modal -->
          <EditModalUser :user="user"/>
          
          <button type="btn" class="btn" id="btnSubmit1"
          @click="this.$store.dispatch('deleteUser', user.user_id)"
          >Delete</button>
        </th>
		</tr>
    </tbody>
  </table>
</template>
  
  <script>
import EditModalUser from "@/components/EditModalUser.vue";

export default {

  mounted() {
    this.$store.dispatch("getUsers");
  },

  computed: {
    users() {
      return this.$store.state.users;
    },
  },

  components: { EditModalUser },
};
</script>
  
  <style >
.rwd-table {
  margin: 1em 0;
  min-width: 300px;
}
.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.rwd-table th {
  display: none;
}
.rwd-table td {
  display: block;
}
.rwd-table td:first-child {
  padding-top: 0.5em;
}
.rwd-table td:last-child {
  padding-bottom: 0.5em;
}
.rwd-table td:before {
  font-weight: bold;
  width: 6.5em;
  display: inline-block;
}
@media (min-width: 480px) {
  .rwd-table td:before {
    display: none;
  }
}
.rwd-table th,
.rwd-table td {
  text-align: left;
}
@media (min-width: 480px) {
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: 0.25em 0.5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
}
body {
  padding: 0 2em;
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: #444;
  background: #eee;
}
h1 {
  font-weight: normal;
  letter-spacing: -1px;
  color: #34495e;
}
.rwd-table {
  background: #34495e;
  color: #fff;
  border-radius: 0.4em;
  overflow: hidden;
}
.rwd-table tr {
  border-color: #46637f;
}
.rwd-table th,
.rwd-table td {
  margin: 0.5em 1em;
}
@media (min-width: 480px) {
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
}
.rwd-table th,
.rwd-table td:before {
  color: #dd5;
}
</style>  