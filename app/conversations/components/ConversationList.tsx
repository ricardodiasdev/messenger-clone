"use client";

import { FullConversationType } from "@/app/types";

interface ConversationListProps {
  initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems
}) => {
  return <div>Conversation List</div>;
};

export default ConversationList;