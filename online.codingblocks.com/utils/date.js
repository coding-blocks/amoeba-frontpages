import { format } from 'date-fns'

export const formatTimestamp = (timestampInSec, formatString = 'dd ccc MMM') => format(new Date(timestampInSec*1000), formatString)
