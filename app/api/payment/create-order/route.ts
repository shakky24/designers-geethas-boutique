import { NextRequest, NextResponse } from 'next/server';
import { razorpay, generateReceiptId, formatAmount } from '@/lib/payment/razorpay';

export async function POST(request: NextRequest) {
  try {
    // Check if Razorpay is configured
    if (!razorpay) {
      return NextResponse.json(
        { error: 'Payment gateway not configured' },
        { status: 503 }
      );
    }

    const { amount, customerDetails } = await request.json();

    // Validate amount
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: formatAmount(amount), // Convert to paise
      currency: 'INR',
      receipt: generateReceiptId(),
      notes: {
        customer_name: customerDetails.name,
        customer_email: customerDetails.email,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    });
  } catch (error: any) {
    console.error('Payment order creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment order', details: error.message },
      { status: 500 }
    );
  }
}
