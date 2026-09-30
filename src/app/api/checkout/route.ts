import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { formData, cartItems, total } = await req.json();

    // Create a transporter using Gmail (for demo purposes)
    // In production, use environment variables: process.env.EMAIL_USER and process.env.EMAIL_PASS
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'demo@example.com',
        pass: process.env.EMAIL_PASS || 'password',
      },
    });

    // Format the order items into a string
    const itemsList = cartItems.map((item: any) => 
      `- ${item.title} (${item.device}) x ${item.quantity} = GH₵ ${item.price * item.quantity}`
    ).join('\n');

    // Email to the Vendor (You)
    const mailOptions = {
      from: '"Inscript Orders" <orders@inscript.com>',
      to: process.env.VENDOR_EMAIL || 'vendor@example.com',
      subject: `New Order Received - GH₵ ${total}`,
      text: `
        You have received a new order!

        Customer Details:
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Address: ${formData.address}, ${formData.city}

        Order Items:
        ${itemsList}

        Total Amount: GH₵ ${total}
      `,
    };

    // If we had valid credentials, we would send the email:
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("Mock Email Sent (No credentials provided):", mailOptions);
    }

    return NextResponse.json({ success: true, message: 'Order processed and email sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error processing checkout:', error);
    return NextResponse.json({ success: false, error: 'Failed to process checkout.' }, { status: 500 });
  }
}
