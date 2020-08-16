<template>
  <div>
<!--     <ul id="default-layout">
      <li v-for="page in $pagination.pages">
        <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
      </li>
    </ul>
    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div> -->

    <!-- <Pagination v-if="$pagination.length > 1"/> -->

    <h1>Custom Layout for vp-blog-plugin demo</h1>

    <a href="/2020/08/12/page">Test Page</a>
    <a href="/2020/08/13/hello">Hello Page</a>
    <a href="/2020/08/13/wiki-post">Wiki Page</a>

    <pre><code>{{$site}}</code></pre>

  </div>
</template>

<script>
/*  import { Pagination } from '../../../../../lib/client/components.js'
  
  export default {
    components: { Pagination },
    created() {},
  } */

  export default {
    created() {}
  }
</script>
