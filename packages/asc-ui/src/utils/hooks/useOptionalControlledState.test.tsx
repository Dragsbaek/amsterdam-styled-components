import React from 'react'
import { getByText, render } from '@testing-library/react'
import {
  act,
  renderHook,
  RenderHookOptions,
} from '@testing-library/react-hooks'
import useOptionalControlledState from './useOptionalControlledState'

describe('useOptionalControlledState', () => {
  const mockFn: jest.Mock = jest.fn()
  const ref: React.Ref<HTMLButtonElement> = React.createRef()

  beforeEach(() => {
    render(
      <button type="button" ref={ref} data-testid="element" onFocus={mockFn} />,
    )
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  function getHookResult(
    controlledBoolean?: boolean,
    setControlledBoolean?: () => void,
    options?: RenderHookOptions<any>,
  ) {
    const { result } = renderHook(() => {
      const [value, setFn] = useOptionalControlledState(
        controlledBoolean,
        setControlledBoolean,
      )
      return { value, setFn }
    }, options)

    return result
  }

  const mockedControlledSetBooleanFn = jest.fn()

  it('should call the controlledSetBoolean when setFn changes', () => {
    const result = getHookResult(false, mockedControlledSetBooleanFn)
    expect(result.current.value).toBe(false)

    act(() => {
      result.current.setFn(true)
    })

    expect(mockedControlledSetBooleanFn).toHaveBeenCalledWith(true)
    expect(result.current.value).toBe(true)
  })

  it('should set the boolean when a controlled boolean is passed', () => {
    const result = getHookResult(true, mockedControlledSetBooleanFn)
    expect(result.current.value).toBe(true)

    act(() => {
      result.current.setFn(false)
    })

    expect(mockedControlledSetBooleanFn).toHaveBeenCalledWith(false)
    expect(result.current.value).toBe(false)
  })

  it('should work like useState when no controlled value is given to the hook', () => {
    const { result } = renderHook(() => {
      const [value, setFn] = useOptionalControlledState()
      return { value, setFn }
    })
    expect(result.current.value).toBe(false)

    act(() => {
      result.current.setFn(true)
    })

    expect(result.current.value).toBe(true)

    act(() => {
      result.current.setFn(false)
    })

    expect(result.current.value).toBe(false)
  })

  it('should set the state when the controlled value is changed', () => {
    const Wrapper: React.FC<any> = ({ open }) => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const [value] = useOptionalControlledState(open, () => {})
      return <div data-testid="node">{value ? 'open' : ''}</div>
    }
    const { container, rerender } = render(<Wrapper open={false} />)
    rerender(<Wrapper open />)

    expect(getByText(container, 'open')).toBeDefined()
  })
})
