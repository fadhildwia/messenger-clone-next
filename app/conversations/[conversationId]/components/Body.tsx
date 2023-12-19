import { FullMessageType } from '@/app/types';
import React from 'react'

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
  return (
    <div className="flex-1 overflow-y-auto">Body</div>
  )
}

export default Body