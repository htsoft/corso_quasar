<template>
  <q-page class="flex q-pa-md">
    Welcome Home
    <q-space />
    <div>
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Logout"
        @click="logout"
        color="primary"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  methods: {
    logout() {
      console.log('logged out');
    },
  },
};
</script>
