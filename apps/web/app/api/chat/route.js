import { queryKnowledgeBase } from '@/lib/ai-knowledge';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const message = body?.message || '';

    const response = queryKnowledgeBase(message);

    return NextResponse.json({
      success: true,
      data: response,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to process chat message',
      },
      { status: 500 }
    );
  }
}
