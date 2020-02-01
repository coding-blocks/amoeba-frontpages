import { format } from 'date-fns'

export const formatTimestamp = (timestampInSec, formatString = 'dd MMM, ccc') => format(new Date(timestampInSec*1000), formatString)
