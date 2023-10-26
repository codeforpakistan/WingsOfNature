<template>
  <div class="max-w-md mx-auto bg-white p-5 rounded-md shadow-sm mt-10 mb-10">
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name">
      </div>
      <div class="mb-4">
        <label class="block text-white-700 text-sm font-bold mb-2" for="about">
          About the Picture
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" id="about" type="text" placeholder="Tell us about the picture"></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="file">
          Upload Picture
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="file" type="file">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: 'Contribute',
    path: '/contribute'
}
</script>

