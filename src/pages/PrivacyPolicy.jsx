import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | A5X Industries Pvt Ltd</title>
        <meta
          name="description"
          content="Privacy Policy for A5X Industries Pvt Ltd — how we collect, use, and protect your personal information on a5x.in."
        />
        <link rel="canonical" href="https://a5x.in/privacy-policy" />
      </Helmet>

      <main className="bg-black text-white min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* ── Header ── */}
          <div className="mb-12">
            <span className="text-cyan-400 text-sm tracking-widest uppercase">Legal</span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white">Privacy Policy</h1>
            <div className="mt-3 w-20 h-[2px] bg-cyan-400 rounded-full" />
            <p className="mt-4 text-gray-400">Last updated: October 16, 2026</p>
          </div>

          {/* ── Content ── */}
          <div className="space-y-10 text-gray-300 leading-relaxed">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                A5X Industries Pvt Ltd (&quot;A5X&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a company
                incorporated under the laws of India, headquartered at Jabalpur, Madhya Pradesh,
                India. We operate the website at{" "}
                <a href="https://a5x.in" className="text-cyan-400 hover:underline">
                  https://a5x.in
                </a>{" "}
                and its related services (&quot;Services&quot;).
              </p>
              <p className="mt-3">
                This Privacy Policy explains what personal data we collect, why we collect it,
                how we use and protect it, and your rights under the Digital Personal Data
                Protection (DPDP) Act, 2023. It applies to all visitors, users, workshop
                registrants, and anyone who interacts with our website.
              </p>
              <p className="mt-3">
                This page is publicly accessible at{" "}
                <a href="https://a5x.in/privacy-policy" className="text-cyan-400 hover:underline">
                  https://a5x.in/privacy-policy
                </a>{" "}
                without requiring login or registration.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Contact &amp; inquiry data:</strong> Name, email address, phone number,
                  organisation name, and message content — submitted through our contact form.
                </li>
                <li>
                  <strong>Workshop registration:</strong> Institution name, number of
                  participants, and preferred dates.
                </li>
                <li>
                  <strong>Feedback &amp; testimonials:</strong> Reviews, ratings, and written
                  testimonials you choose to submit through the feedback form.
                </li>
                <li>
                  <strong>Admin account data:</strong> Email address and password (stored as a
                  bcrypt hash — never in plain text) for admin users who manage site content.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                2.2 Information Collected Automatically
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Analytics data:</strong> Pages visited, time on site, referrer URL,
                  browser type, device type, and approximate location — collected via Google
                  Analytics 4 and Microsoft Clarity.
                </li>
                <li>
                  <strong>Server logs:</strong> IP address, request method, and response status
                  — collected automatically by our backend server for security and debugging.
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responding to contact form submissions and workshop enquiries.</li>
                <li>Processing and confirming workshop registrations.</li>
                <li>
                  Displaying approved feedback and testimonials on our website (only with your
                  knowledge when you submit the form).
                </li>
                <li>
                  Sending service-related emails (e.g., booking confirmations). Marketing
                  emails are sent only with your explicit consent and you may opt out at any
                  time.
                </li>
                <li>
                  Improving our website performance and user experience through analytics.
                </li>
                <li>
                  Maintaining server security, debugging issues, and protecting against
                  unauthorised access.
                </li>
                <li>Complying with applicable legal obligations under Indian law.</li>
              </ul>
              <p className="mt-4">
                We do <strong>not</strong> sell, rent, or trade your personal information to
                any third party for advertising or any other commercial purpose.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Third-Party Services We Use (Sub-Processors)
              </h2>
              <p className="mb-4">
                We use the following third-party services to operate our website. Each
                processes only the data necessary for their specific function:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/10 text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-white">
                      <th className="py-3 px-4 font-semibold">Service</th>
                      <th className="py-3 px-4 font-semibold">Purpose</th>
                      <th className="py-3 px-4 font-semibold">Data Involved</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 px-4">MongoDB Atlas</td>
                      <td className="py-3 px-4">Database — stores contact, feedback, team, gallery and lab data</td>
                      <td className="py-3 px-4">Names, emails, messages, uploaded content</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Cloudinary</td>
                      <td className="py-3 px-4">Image and media hosting (team photos, gallery, uploads)</td>
                      <td className="py-3 px-4">Uploaded images only</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">SendGrid</td>
                      <td className="py-3 px-4">Transactional email delivery (contact form notifications)</td>
                      <td className="py-3 px-4">Sender name, email, message</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Nodemailer (SMTP)</td>
                      <td className="py-3 px-4">Fallback email delivery via Gmail SMTP</td>
                      <td className="py-3 px-4">Sender name, email, message</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Vercel</td>
                      <td className="py-3 px-4">Frontend hosting &amp; CDN</td>
                      <td className="py-3 px-4">IP address, request logs</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Render</td>
                      <td className="py-3 px-4">Backend API server hosting</td>
                      <td className="py-3 px-4">IP address, API request logs</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Google Analytics 4</td>
                      <td className="py-3 px-4">Website usage analytics</td>
                      <td className="py-3 px-4">Anonymised browsing behaviour</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Microsoft Clarity</td>
                      <td className="py-3 px-4">Heatmaps &amp; session recordings for UX improvement</td>
                      <td className="py-3 px-4">Anonymised session behaviour</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Each sub-processor operates under its own privacy policy and applicable data
                protection agreements.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Cookies &amp; Tracking Technologies
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Essential:</strong> Required for the site to function (e.g., admin
                  session JWT stored in memory). Cannot be disabled.
                </li>
                <li>
                  <strong>Analytics (Google Analytics 4):</strong> Tracks page views and user
                  behaviour anonymously. Opt out via the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-cyan-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics Opt-out Add-on
                  </a>
                  .
                </li>
                <li>
                  <strong>Analytics (Microsoft Clarity):</strong> Records anonymised session
                  heatmaps. Opt out at{" "}
                  <a
                    href="https://privacy.microsoft.com"
                    className="text-cyan-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy.microsoft.com
                  </a>
                  .
                </li>
              </ul>
              <p className="mt-3">
                You can delete or block cookies through your browser settings at any time.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Data Security
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All data is transmitted over HTTPS (TLS encryption).</li>
                <li>
                  Admin passwords are hashed using bcrypt before storage — plain-text
                  passwords are never stored.
                </li>
                <li>
                  API routes are protected by JWT authentication and role-based access
                  control.
                </li>
                <li>
                  HTTP security headers (via Helmet.js) are applied on every response.
                </li>
              </ul>
              <p className="mt-3">
                No method of internet transmission is 100% secure. In the unlikely event of a
                data breach that affects your rights, we will notify you and the relevant
                authorities as required by law.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Data Retention &amp; Deletion
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Contact &amp; inquiry data:</strong> Retained for up to 2 years
                  from the date of submission, then deleted.
                </li>
                <li>
                  <strong>Feedback &amp; testimonials:</strong> Retained as long as displayed
                  on site, or until you request removal.
                </li>
                <li>
                  <strong>Uploaded images:</strong> Retained on Cloudinary until deleted by
                  an admin or upon your request.
                </li>
                <li>
                  <strong>Server logs:</strong> Retained for up to 90 days for security
                  purposes, then automatically purged.
                </li>
                <li>
                  <strong>Analytics data:</strong> Retained per provider defaults — Google
                  Analytics 4: 14 months; Microsoft Clarity: 30 days.
                </li>
                <li>
                  <strong>Admin accounts:</strong> Deleted within 30 days of an account
                  deletion request.
                </li>
              </ul>
              <p className="mt-4">
                To request deletion of your personal data, email{" "}
                <a
                  href="mailto:a5x.industries@gmail.com"
                  className="text-cyan-400 hover:underline"
                >
                  a5x.industries@gmail.com
                </a>{" "}
                with the subject line <strong>&quot;Data Deletion Request&quot;</strong>. We will
                process your request within 30 days.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Information Sharing
              </h2>
              <p className="mb-3">
                We do not sell or share your personal data except in the following limited
                situations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Sub-processors:</strong> As listed in Section 4, solely to operate
                  our Services.
                </li>
                <li>
                  <strong>Legal requirement:</strong> If required by Indian law, court order,
                  or government authority.
                </li>
                <li>
                  <strong>Business transfer:</strong> In the event of a merger, acquisition,
                  or asset sale, with prior notice to affected users.
                </li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Your Rights (DPDP Act, 2023)
              </h2>
              <p className="mb-3">
                Under the Digital Personal Data Protection Act, 2023 and other applicable
                Indian laws, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Obtain a summary of the personal data we hold about
                  you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete
                  data.
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your personal data (subject to
                  legal retention obligations).
                </li>
                <li>
                  <strong>Withdraw consent:</strong> Withdraw your consent at any time without
                  affecting prior processing.
                </li>
                <li>
                  <strong>Grievance redressal:</strong> Lodge a complaint with our Grievance
                  Officer (Section 11) or with the Data Protection Board of India once
                  constituted.
                </li>
                <li>
                  <strong>Nomination:</strong> Nominate another individual to exercise your
                  rights in the event of your death or incapacity (DPDP Act, 2023).
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, email{" "}
                <a
                  href="mailto:a5x.industries@gmail.com"
                  className="text-cyan-400 hover:underline"
                >
                  a5x.industries@gmail.com
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Children&apos;s Privacy
              </h2>
              <p>
                Our website is not directed to children under 18 years of age. We do not
                knowingly collect personal data from minors. If you believe we have
                inadvertently collected such data, please contact us immediately and we will
                delete it promptly.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Grievance Officer (DPDP Act, 2023)
              </h2>
              <p className="mb-4">
                In accordance with the Digital Personal Data Protection Act, 2023 and the
                Information Technology Act, 2000, the details of our Grievance Officer are:
              </p>
              <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 space-y-2">
                <p><strong>Name:</strong> Anupam Mishra (CEO, A5X Industries Pvt Ltd)</p>
                <p><strong>Address:</strong> Jabalpur, Madhya Pradesh, India</p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:a5x.industries@gmail.com"
                    className="text-cyan-400 hover:underline"
                  >
                    a5x.industries@gmail.com
                  </a>
                </p>
                <p><strong>Response time:</strong> Within 30 days of receiving your grievance.</p>
              </div>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Third-Party Links
              </h2>
              <p>
                Our website may contain links to external websites. We are not responsible for
                the privacy practices of those sites and encourage you to review their
                respective privacy policies.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. The &quot;Last updated&quot; date at
                the top reflects the most recent revision. For significant changes, we will
                notify you via email (if we hold your address) or through a notice on our
                website. Continued use of the website after changes constitutes acceptance of
                the updated policy.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Us</h2>
              <p className="mb-4">
                For any questions or requests regarding this Privacy Policy:
              </p>
              <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 space-y-2">
                <p><strong>A5X Industries Pvt Ltd</strong></p>
                <p>Jabalpur, Madhya Pradesh, India</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:a5x.industries@gmail.com"
                    className="text-cyan-400 hover:underline"
                  >
                    a5x.industries@gmail.com
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a href="https://a5x.in" className="text-cyan-400 hover:underline">
                    https://a5x.in
                  </a>
                </p>
              </div>
            </section>

            {/* Footer note */}
            <section className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">
                By using our website and Services, you confirm that you have read and
                understood this Privacy Policy.
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
