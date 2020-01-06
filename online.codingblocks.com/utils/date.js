import { format } from 'date-fns'

export const formatTimestamp = (timestampInSec, formatString) => format(new Date(timestampInSec*1000), formatString)