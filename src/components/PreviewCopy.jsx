import { useState } from 'react'

import { useCopyToClipboard } from 'react-use'

import Button from '@component/Button'

export default function PreviewCopy({ componentCode = '' }) {
  const [buttonText, setButtonText] = useState('Copy')
  const [buttonEmoji, setButtonEmoji] = useState('📋')
  const [copyStatus, copyToClipboard] = useCopyToClipboard()

  function handleCopyToClipboard() {
    copyToClipboard(componentCode)

    if (copyStatus.error) {
      setButtonText('Error')
      setButtonEmoji('🚨')

      return
    }

    setButtonText('Copied')
    setButtonEmoji('🎉')

    setTimeout(() => {
      setButtonText('Copy')
      setButtonEmoji('📋')
    }, 3000)
  }

  return (
    <span className="hidden sm:block">
      <Button onClick={handleCopyToClipboard}>
        <span aria-hidden="true">{buttonEmoji}</span>
        <span>{buttonText}</span>
      </Button>
    </span>
  )
}
