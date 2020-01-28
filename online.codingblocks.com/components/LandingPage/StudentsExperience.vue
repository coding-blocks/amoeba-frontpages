<template>
  <div class="container mb-5">
    <h2 class="bold t-align-c my-5">What our students say</h2>
    <div class="mb-5">
      <iframe
        src="https://www.youtube.com/embed/h_YmJLN9IgY"
        frameborder="0"
        loading="lazy"
        class="w-100"
        data-v-03fd9cc6
        style="height: 450px"
      ></iframe>
    </div>

    <div class="row mt-5">
      <div class="col-lg-4 col-md-6 pb-4" v-for="review in reviews" :key="review.name">
        <div class="border-card p-5">
          <img src="https://minio.codingblocks.com/landing-pages/group.svg" alt class="overlay-icon" />
          <div class="d-flex align-items-center">
            <div class="bg-grey s-50x50 br-50 overflow-hidden">
              <img class="h-100" :src="review.img" :alt="review.name">
            </div>
            <div class="ml-3">
              <div class="bold">{{ review.name }}</div>
              <div class="card-md font-normal">{{ review.course }}</div>
            </div>
          </div>
          <div class="my-5 font-normal review-body">
            {{review.body}}
          </div>
          <div class="extra-bold">Placed at {{review.company}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-body {
  height: 80px;
  overflow: auto
}
</style>
<script>
export default {
  data () {
    return {
      reviews: [{
        name: 'Anshul Mittal',
        course: 'Android Development Course',
        body: `Coding Blocks helped in gaining enough experience to get internships at giants like Google and Rubrik.`,
        company: 'Google',
        img: `https://minio.codingblocks.com/codingblocks-assets/1536154281747.jpeg`
      }, {
        name: 'Sidharth Bansal',
        course: 'Web Development',
        body: `Hii I am Sidharth Bansal from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset.`,
        company: 'Amazon',
        img: `https://minio.codingblocks.com/codingblocks-assets/1537792831355.jpeg`
      }, {
        name: 'Samarth Jain',
        course: 'Competitive Programming',
        body: `My journey in the world of Competitive Programming started with the Bootcamp at Coding Blocks, which turned out to be a changing point in my life. The immense amount of knowledge I got during the course did not only develop my interest but also made me pursue this field later. A special thanks to Shubham bhaiya, Mayank bhaiya and Prateek bhaiya for being the guiding lights in my journey and always motivating us to follow our passion!`,
        company: 'Uber',
        img: `https://minio.codingblocks.com/codingblocks-assets/1538401462569.jpeg`
      }]
    }
  }
}
</script>