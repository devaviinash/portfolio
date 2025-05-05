import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
   if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
   }

   try {
      const { name, email, phone, subject, message } = req.body;

      // Validate phone number
      const phoneRegex = /^[0-9\s+()-]{10,}$/;
      if (!phoneRegex.test(phone)) {
         return res.status(400).json({ error: "Invalid phone number format" });
      }

      const data = await resend.emails.send({
         from: "avinash.app@resend.dev", // Update this with your verified domain
         to: "avinashchavan127@gmail.com", // Replace with your email
         subject: `Contact Form: ${subject}`,
         html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      });

      return res.status(200).json({ success: true });
   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
}
