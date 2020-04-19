import { formatTimestamp } from '~/utils/date'
export const jsonSchemaForCourse = (course) => {
  if (course.unlisted) {
    return ''
  }
  const data = {
    '@context': 'http://schema.org/',
    '@type': 'Product',
    name: course.title,
    sku: course.id,
    image: [course.logo],
    // review: {
    //   '@type': 'Review',
    //   reviewRating: {
    //     '@type': 'Rating',
    //     ratingValue: ratings.length > 0 ? ratings[0].value : 5,
    //     bestRating: '5'
    //   },
    //   author: {
    //     '@type': 'Person',
    //     name:
    //       ratings.length > 0
    //         ? ratings[0].user.firstname + ' ' + ratings[0].user.lastname
    //         : 'Abhishek Gupta'
    //   }
    // },
    url: `https://online.codingblocks.com/courses/${course.slug}`,
    description: course.subtitle,
    brand: {
      '@type': 'Thing',
      name: 'Coding Blocks'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: course.rating,
      reviewCount: parseInt(course.id) * 9 || 40
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      priceValidUntil:
        course['active-runs'].length > 0
          ? formatTimestamp(
              course['active-runs'][0]['enrollment-end'],
              'yyyy-MM-dd'
            )
          : formatTimestamp(Date.now() / 1000, 'yyyy-MM-dd'),
      price: course.runs.length && course.runs.reduce((acc, curr) =>
        acc.price < curr.price ? acc : curr
      ).price,
      availability: 'http://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Coding Blocks'
      },
      url: `https://online.codingblocks.com/courses/${course.slug}`
    }
  }

  return data
}

export const jsonSchemaForAllCourses = (courses) => {
  let data = {}

  data['@context'] = 'http://schema.org'
  data['@type'] = 'ItemList'
  data['itemListElement'] = courses
    .filter((course) => !course.unlisted)
    .map((course, ind) => ({
      '@type': 'ListItem',
      position: ind + 1,
      item: {
        '@context': 'http://schema.org',
        '@type': 'Course',
        name: course.title,
        description: course.subtitle,
        provider: {
          '@type': 'Organization',
          name: 'Coding Blocks',
          sameAs: 'https://online.codingblocks.com/'
        },
        url: `https://online.codingblocks.com/courses/${course.slug}`
      }
    }))
  return data
}

export const metaForCourse = (course) => {
  return [
    { hid: 'description', type: 'description', content: course['seo-meta'] },
    { hid: 2, type: 'title', content: course.subtitle },
    { hid: 3, type: 'twitter:card', content: 'summary' },
    { hid: 4, type: 'twitter:site', content: '@CodingBlocksIn' },
    { hid: 5, property: 'og:title', content: course.subtitle },
    {
      hid: 6,
      property: 'og:description',
      content: course['seo-meta']
    },
    { hid: 7, property: 'og:image', content: course.logo },
    { hid: 8, property: 'og:site_name', content: 'Coding Blocks Online' },
    {
      hid: 9,
      property: 'og:url',
      content: `https://online.codingblocks.com/courses/${course.slug}`
    },
    { hid: 10, itemprop: 'name', content: course.subtitle },
    { hid: 11, itemprop: 'description', content: course['seo-meta'] },
    { hid: 12, itemprop: 'image', content: course.logo },
    { hid: 13, property: 'og:type', content: 'website' },
  ]
}

export const metaForAllCourses = () => {
  return [
    {
      hid: 'description',
      type: 'description',
      content:
        'Coding Blocks is the best online programming and software training Institute offer online certification courses in Jave, C++, Android, NodeJs, Data structure, Machine learning, Interview preparation and more.'
    },
    {
      hid: 2,
      type: 'title',
      content: 'Best online computer programming and coding courses in India.'
    },
    { hid: 3, type: 'twitter:card', content: 'summary' },
    { hid: 4, type: 'twitter:site', content: '@CodingBlocksIn' },
    {
      hid: 5,
      property: 'og:title',
      content: 'Best online computer programming and coding courses in India.'
    },
    {
      hid: 6,
      property: 'og:description',
      content:
        'Coding Blocks is the best online programming and software training Institute offer online certification courses in Jave, C++, Android, NodeJs, Data structure, Machine learning, Interview preparation and more.'
    },
    {
      hid: 7,
      property: 'og:image',
      content:
        'https://minio.codingblocks.com/amoeba/OnlineLogo2020_LIGHT_logofull.png'
    },
    { hid: 8, property: 'og:site_name', content: 'Coding Blocks Online' },
    {
      hid: 9,
      property: 'og:url',
      content: 'https://online.codingblocks.com/courses'
    },
    {
      hid: 10,
      itemprop: 'name',
      content: 'Best online computer programming and coding courses in India.'
    },
    {
      hid: 11,
      itemprop: 'description',
      content:
        'Coding Blocks is the best online programming and software training Institute offer online certification courses in Jave, C++, Android, NodeJs, Data structure, Machine learning, Interview preparation and more.'
    },
    {
      hid: 12,
      itemprop: 'image',
      content:
        'https://minio.codingblocks.com/amoeba/OnlineLogo2020_LIGHT_logofull.png'
    }
  ]
}
