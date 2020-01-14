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
              'yyyy-mm-dd'
            )
          : formatTimestamp(Date.now() / 1000, 'yyyy-mm-dd'),
      price: course.runs.reduce((acc, curr) =>
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
