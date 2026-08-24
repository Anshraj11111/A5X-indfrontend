import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | A5X Industries Pvt Ltd</title>
        <meta name="description" content="Privacy Policy for A5X Industries - Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <main className="bg-black text-white min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="text-cyan-400 text-sm tracking-widest uppercase">Legal</span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white">Privacy Policy</h1>
            <div className="mt-3 w-20 h-[2px] bg-cyan-400 rounded-full" />
            <p className="mt-4 text-gray-400">Last updated: July 10, 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to A5X Industries Pvt Ltd ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://a5x.in" className="text-cyan-400 hover:underline">https://a5x.in</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, organization details</li>
                <li><strong>Workshop Registration:</strong> Institution name, number of participants, preferred dates</li>
                <li><strong>Contact Form Data:</strong> Message content, project requirements</li>
                <li><strong>Feedback:</strong> Your reviews, ratings, and testimonials</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Processing workshop registrations and inquiries</li>
                <li>Responding to your contact form submissions</li>
                <li>Sending updates about our services, projects, and workshops</li>
                <li>Improving our website and user experience</li>
                <li>Displaying approved feedback and testimonials on our website</li>
                <li>Analytics and understanding user behavior</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information. We may share information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Email services, hosting providers, analytics tools</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to improve your browsing experience, analyze website traffic, and understand user preferences. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
              <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
              <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 space-y-2">
                <p><strong>A5X Industries Pvt Ltd</strong></p>
                <p>Jabalpur, Madhya Pradesh, India</p>
                <p>Email: <a href="mailto:a5x.industries@gmail.com" className="text-cyan-400 hover:underline">a5x.industries@gmail.com</a></p>
                <p>Website: <a href="https://a5x.in" className="text-cyan-400 hover:underline">https://a5x.in</a></p>
              </div>
            </section>

            <section className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">
                By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
