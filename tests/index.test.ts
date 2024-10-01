/**
 * Internally, hookstate overrides some react functions (such as useEffect)
 * - see https://github.com/avkonst/hookstate/issues/412
 */
import '@hookstate/core'

import React, { useEffect } from 'react'

console.log(React.useEffect)
console.log(useEffect)

if (React.useEffect !== useEffect) throw new Error('useEffect from the wrong React import')
