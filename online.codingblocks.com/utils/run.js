import RUN_FEATURES from '~/constants/RUN_FEATURES'

export const iconForTier = (tier) => {
  switch (tier) {
    case 'LITE': return `https://cb-thumbnails.s3.ap-south-1.amazonaws.com/lite.png`
    case 'PREMIUM': return `https://cb-thumbnails.s3.ap-south-1.amazonaws.com/premium.png`
    case 'CLASSROOM': return `https://cb-thumbnails.s3.ap-south-1.amazonaws.com/classroom.png`
    case 'LIVE': return `https://cb-thumbnails.s3.ap-south-1.amazonaws.com/live.png`
    default: return `https://cb-thumbnails.s3.ap-south-1.amazonaws.com/premium.png`
  }
}

export const featuresForRunTier = (tier = 'PREMIUM') => {
  return RUN_FEATURES[tier]
}

const scoreForTier = (tier) => {
  switch (tier) {
    case 'LITE': return 0
    case 'PREMIUM': return 1
    case 'CLASSROOM': return 2
    case 'LIVE': return 3
    default: return 1
  }
}

export const byTier = (run1, run2) => scoreForTier(run1.tier) - scoreForTier(run2.tier)