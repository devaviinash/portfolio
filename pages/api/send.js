import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
   if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
   }

   try {
      const { name, email, subject, message } = req.body;

      const data = await resend.emails.send({
         from: "onboarding@resend.dev", // Update this with your verified domain
         to: "your-email@example.com", // Replace with your email
         subject: `Contact Form: ${subject}`,
         html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      });

      return res.status(200).json({ success: true });
   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
}
