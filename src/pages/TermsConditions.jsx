import { Helmet } from "react-helmet-async";

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | A5X Industries Pvt Ltd</title>
        <meta name="description" content="Terms and Conditions for A5X Industries - Read our terms of service and usage policies." />
      </Helmet>

      <main className="bg-black text-white min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="text-cyan-400 text-sm tracking-widest uppercase">Legal</span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white">Terms & Conditions</h1>
            <div className="mt-3 w-20 h-[2px] bg-cyan-400 rounded-full" />
            <p className="mt-4 text-gray-400">Last updated: July 10, 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the A5X Industries website (<a href="https://a5x.in" className="text-cyan-400 hover:underline">https://a5x.in</a>), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Website</h2>
              <p className="mb-4">You agree to use our website only for lawful purposes. You must not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Engage in any activity that disrupts or interferes with our services</li>
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our website for any commercial purposes without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property Rights</h2>
              <p className="mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of A5X Industries Pvt Ltd and is protected by Indian and international copyright, trademark, and intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from our content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Workshop Services</h2>
              <p className="mb-4">When booking our robotics workshops or training services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All bookings are subject to availability and confirmation</li>
                <li>Workshop fees must be paid as per agreed terms</li>
                <li>Cancellation and refund policies will be communicated separately</li>
                <li>We reserve the right to reschedule or cancel workshops due to unforeseen circumstances</li>
                <li>Participants must follow safety guidelines during hands-on sessions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. User-Generated Content</h2>
              <p className="mb-4">
                When you submit feedback, testimonials, or any content to our website:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You grant us a non-exclusive, worldwide license to use, display, and publish your content</li>
                <li>You represent that the content is original and does not violate any third-party rights</li>
                <li>We reserve the right to moderate, edit, or remove any content at our discretion</li>
                <li>Approved feedback may be displayed publicly on our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Disclaimer of Warranties</h2>
              <p>
                Our website and services are provided "as is" without any warranties, express or implied. We do not guarantee that our website will be uninterrupted, secure, or error-free. We make no warranties regarding the accuracy, reliability, or completeness of the content on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, A5X Industries Pvt Ltd shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages arising from the use or inability to use our website or services</li>
                <li>Any errors or omissions in the content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Privacy Policy</h2>
              <p>
                Your use of our website is also governed by our Privacy Policy. Please review our <a href="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or terms of service of any third-party sites. Accessing third-party links is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Modifications to Terms</h2>
              <p>
                We reserve the right to modify or update these Terms and Conditions at any time without prior notice. The updated version will be indicated by the "Last updated" date. Your continued use of the website after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Jabalpur, Madhya Pradesh, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Severability</h2>
              <p>
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Information</h2>
              <p className="mb-4">For questions or concerns about these Terms and Conditions, please contact us:</p>
              <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 space-y-2">
                <p><strong>A5X Industries Pvt Ltd</strong></p>
                <p>Jabalpur, Madhya Pradesh, India</p>
                <p>Email: <a href="mailto:a5x.industries@gmail.com" className="text-cyan-400 hover:underline">a5x.industries@gmail.com</a></p>
                <p>Website: <a href="https://a5x.in" className="text-cyan-400 hover:underline">https://a5x.in</a></p>
              </div>
            </section>

            <section className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
