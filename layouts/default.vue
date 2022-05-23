<template>
  <div class="w-full mx-auto max-w-6xl">
    <nav
      class="w-full flex space-x-5 uppercase font-thin text-xs bg-white fixed bottom-0"
    >
      <a
        class="hover:bg-gray-200 block p-2"
        v-for="item in domains"
        :key="item.to"
        :href="item.to"
      >
        {{ item.name }}
      </a>
    </nav>

    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      domains: [
        {
          name: "main site",
          to: "http://main.io:3000",
        },
        {
          name: "site 1",
          to: "http://site1.io:3000",
        },
        {
          name: "site 2",
          to: "http://site2.io:3000",
        },
      ],
    };
  },
};
</script>
