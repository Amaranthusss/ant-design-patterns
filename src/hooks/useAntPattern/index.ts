import { ChangeEvent, useCallback, useState } from 'react'
import _ from 'lodash'

import {
  IAntPatternOptions,
  IValue,
} from '../../components/AntPattern/AntPattern.interface'

export const useOnInputChanged = (props: IAntPatternOptions<any>) => {
  const [value, setValue] = useState<IValue>()

  const onChange = useCallback(
    (event: ChangeEvent<any>): void => {
      setValue(event.target.value)
      if (_.isFunction(props.default?.onChange)) {
        props.default?.onChange(event)
      }
    },
    [props.default]
  )

  return { value, setValue, onChange }
}
