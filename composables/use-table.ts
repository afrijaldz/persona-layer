import { toValue, useEventListener } from '@vueuse/core'
import { defu } from 'defu'

interface TableOptions {
  element: string
}

export function useTable<T>(items: MaybeRef<T[]>, options?: TableOptions) {
  const value = computed(() => toValue(items))
  const opts = defu(options, {
    element: '.table-static__table',
  })

  const handleClick = async (callback: (item: T) => void) => {

    let listener: () => void

    const register = () => {
      const table = document.querySelector(opts.element) as HTMLElement
      const tbody = table.querySelector('.table-static tbody') as HTMLElement

      tbody?.classList.add('cursor-pointer')

      // reduce overhead by using event delegation to tbody
      listener = useEventListener(tbody, 'click', (event) => {
        event.preventDefault()
        event.stopPropagation()

        const target = event.target as HTMLElement

        if (target.closest('input') || target.closest('button') || target.closest('a')) return

        const selectedText = document.getSelection()?.toString()

        if (selectedText) return

        const targetRow = (target as HTMLElement).closest('tr')

        if (!targetRow) return

        if (target.closest('td')?.classList.contains('table-static__checkbox')) return

        const allRows = Array.from(tbody?.querySelectorAll('tr'))

        const index = allRows.indexOf(targetRow)

        callback(value.value?.[index] as T)
      })
    }

    onMounted(() => {
      register()
    })

    watch(items, (value) => {
      nextTick(() => {
        if (listener) listener()
        if (value !== undefined && (Array.isArray(value) && value.length > 0)) register()
      })
    })

    onUnmounted(() => {
      listener?.()
    })
  }

  return {
    handleClick,
  }
}
