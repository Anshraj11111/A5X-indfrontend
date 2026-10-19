import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | A5X Industries Pvt Ltd</title>
        <meta
          name="description"
          content="Privacy Policy for A5X Industries Pvt Ltd — how we collect, use, and protect your personal information across our website and Google Home integration."
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
                A5X Industries Pvt Ltd (&quot;A5X&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company incorporated
                under the laws of India and headquartered at Jabalpur, Madhya Pradesh, India,
                operates the website at{" "}
                <a href="https://a5x.in" className="text-cyan-400 hover:underline">
                  https://a5x.in
                </a>{" "}
                and related services including the A5X Smart Home integration with Google Home
                (&quot;Services&quot;).
              </p>
              <p className="mt-3">
                This Privacy Policy explains what information we collect, why we collect it, how
                we use and protect it, and your rights regarding your data. It applies to all
                visitors, users, and anyone who interacts with our website or integrates our
                Services with Google Home.
              </p>
              <p className="mt-3">
                By using our website or Services, you acknowledge that you have read and
                understood this Privacy Policy.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-lg font-semibold text-white mt-5 mb-2">
                2.1 Website Visitors
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Contact &amp; inquiry data:</strong> Name, email address, phone number,
                  organisation name, message content, workshop requirements — submitted through
                  contact or registration forms.
                </li>
                <li>
                  <strong>Feedback &amp; testimonials:</strong> Reviews, ratings, and written
                  testimonials you choose to submit.
                </li>
                <li>
                  <strong>Technical &amp; analytics data:</strong> IP address, browser type, device
                  type, operating system, pages visited, referrer URL, and session duration —
                  collected automatically via cookies and analytics tools (Google Analytics 4,
                  Microsoft Clarity).
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                2.2 Google Home Integration (Smart Home Users)
              </h3>
              <p className="mb-3">
                If you link your A5X account with Google Home through OAuth 2.0 account linking,
                we additionally collect or process:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Account identifiers:</strong> Your name, email address, and unique user
                  ID obtained at login (via Google Sign-In or A5X account).
                </li>
                <li>
                  <strong>OAuth tokens:</strong> Access tokens and refresh tokens issued during
                  account linking, used solely to authenticate your Google Home requests.
                </li>
                <li>
                  <strong>Device data:</strong> Device names, room assignments, on/off state,
                  online status, last-seen timestamps, and — where applicable — runtime
                  duration, energy analytics, and Wi-Fi signal strength.
                </li>
              </ul>
              <p className="mt-3">
                We do <strong>not</strong> collect voice commands. Voice commands are processed
                entirely by Google and are governed by{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-cyan-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responding to contact form submissions and workshop enquiries.</li>
                <li>Processing and confirming workshop registrations.</li>
                <li>Displaying approved testimonials on our website (with your consent).</li>
                <li>
                  Sending service-related communications (e.g., booking confirmations). Marketing
                  communications are sent only with your explicit consent and you may opt out at
                  any time.
                </li>
                <li>Improving our website performance and user experience via analytics.</li>
                <li>
                  <strong>Google Home only:</strong> Authenticating your account, syncing device
                  state (SYNC), responding to device queries (QUERY), and executing device commands
                  (EXECUTE) on your behalf through the Google Smart Home Actions API.
                </li>
                <li>Complying with applicable legal obligations under Indian law.</li>
              </ul>
              <p className="mt-4">
                We do <strong>not</strong> sell, rent, or trade your personal information to
                third parties for advertising or any other commercial purpose.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. What Is Shared with Google Home
              </h2>
              <p className="mb-3">
                When you link A5X with Google Home, the following data is shared with Google
                through the Smart Home Actions API so that Google Assistant can control your
                A5X-connected devices:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Device names and types</li>
                <li>Room assignments</li>
                <li>Current on/off state and online status</li>
                <li>Other device attributes required by the relevant Google Home device trait</li>
              </ul>
              <p className="mt-3">
                This sharing is limited strictly to what is necessary for device control. Google
                processes this data under its own Privacy Policy. You can revoke A5X&apos;s access
                at any time from the Google Home app under Settings → Works with Google → A5X →
                Unlink.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Sub-Processors &amp; Third-Party Services
              </h2>
              <p className="mb-3">
                We use the following third-party service providers (&quot;sub-processors&quot;) to
                operate our Services:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/10 text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-white">
                      <th className="py-3 px-4 font-semibold">Provider</th>
                      <th className="py-3 px-4 font-semibold">Purpose</th>
                      <th className="py-3 px-4 font-semibold">Data Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 px-4">Firebase / Google Cloud</td>
                      <td className="py-3 px-4">Authentication, real-time device data, hosting</td>
                      <td className="py-3 px-4">Google data centres (global)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Vercel</td>
                      <td className="py-3 px-4">Web application hosting &amp; deployment</td>
                      <td className="py-3 px-4">Global edge network</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Google Analytics 4</td>
                      <td className="py-3 px-4">Website analytics</td>
                      <td className="py-3 px-4">Google data centres (global)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Microsoft Clarity</td>
                      <td className="py-3 px-4">Heatmaps &amp; session analytics</td>
                      <td className="py-3 px-4">Microsoft Azure (global)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Cloudinary</td>
                      <td className="py-3 px-4">Image and media hosting</td>
                      <td className="py-3 px-4">Global CDN</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">EmailJS / Nodemailer</td>
                      <td className="py-3 px-4">Contact form email delivery</td>
                      <td className="py-3 px-4">Respective provider servers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Each sub-processor is bound by its own privacy policy and applicable data
                protection agreements. We select sub-processors that provide adequate safeguards
                for personal data.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Cookies &amp; Tracking Technologies
              </h2>
              <p className="mb-3">We use the following types of cookies and trackers:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Essential cookies:</strong> Required for the website to function
                  (e.g., session management). Cannot be disabled.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Google Analytics 4 and Microsoft Clarity
                  — help us understand how visitors interact with the site. You may opt out via
                  your browser settings or by using the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-cyan-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </li>
              </ul>
              <p className="mt-3">
                You can manage or delete cookies through your browser settings at any time.
                Disabling cookies may affect some website features.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Data Retention &amp; Deletion
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Contact &amp; inquiry data:</strong> Retained for up to 2 years from
                  the date of last interaction, then securely deleted.
                </li>
                <li>
                  <strong>Feedback &amp; testimonials:</strong> Retained as long as they are
                  displayed on the site or until you request removal.
                </li>
                <li>
                  <strong>Analytics data:</strong> Retained as per the respective provider&apos;s
                  default retention settings (Google Analytics: 14 months; Clarity: 30 days).
                </li>
                <li>
                  <strong>Google Home OAuth tokens:</strong> Revoked and deleted immediately
                  upon account unlinking from Google Home. Device state data is deleted within
                  30 days of unlinking.
                </li>
                <li>
                  <strong>Account data:</strong> Deleted within 30 days of an account deletion
                  request.
                </li>
              </ul>
              <p className="mt-4">
                To request deletion of your data, email us at{" "}
                <a
                  href="mailto:a5x.industries@gmail.com"
                  className="text-cyan-400 hover:underline"
                >
                  a5x.industries@gmail.com
                </a>{" "}
                with the subject line &quot;Data Deletion Request&quot;. We will process your request
                within 30 days.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Data Security</h2>
              <p>
                We implement appropriate technical and organisational security measures to protect
                your personal information, including HTTPS encryption in transit, access controls,
                and secure credential storage. OAuth tokens used for Google Home integration are
                stored securely and are never exposed in plain text.
              </p>
              <p className="mt-3">
                No method of transmission over the internet is 100% secure. In the event of a
                data breach that affects your rights and freedoms, we will notify you and the
                relevant authorities as required by applicable law.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Your Rights
              </h2>
              <p className="mb-3">
                Under the Indian Digital Personal Data Protection (DPDP) Act, 2023 and other
                applicable laws, you have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Right to access:</strong> Obtain a summary of your personal data we
                  process.
                </li>
                <li>
                  <strong>Right to correction:</strong> Request correction of inaccurate or
                  incomplete personal data.
                </li>
                <li>
                  <strong>Right to erasure:</strong> Request deletion of your personal data
                  (subject to legal retention obligations).
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Withdraw your consent at any time
                  without affecting the lawfulness of prior processing.
                </li>
                <li>
                  <strong>Right to nominate:</strong> Under DPDP Act 2023, nominate another
                  individual to exercise your rights in the event of your death or incapacity.
                </li>
                <li>
                  <strong>Right to grievance redressal:</strong> Lodge a complaint with our
                  Grievance Officer (see Section 12) or with the Data Protection Board of India
                  once it is constituted.
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at{" "}
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
                Our website and Services are not directed to children under the age of 18. We do
                not knowingly collect personal data from minors. If you believe we have
                inadvertently collected such data, please contact us immediately and we will
                delete it promptly.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Third-Party Links
              </h2>
              <p>
                Our website may contain links to external websites. We are not responsible for
                the privacy practices of those sites. We encourage you to review the privacy
                policy of every website you visit.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Grievance Officer (DPDP Act 2023)
              </h2>
              <p className="mb-4">
                In accordance with the Information Technology Act, 2000 and the Digital Personal
                Data Protection Act, 2023, the details of the Grievance Officer are:
              </p>
              <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 space-y-2">
                <p>
                  <strong>Name:</strong> Anupam Mishra (CEO)
                </p>
                <p>
                  <strong>Organisation:</strong> A5X Industries Pvt Ltd
                </p>
                <p>
                  <strong>Address:</strong> Jabalpur, Madhya Pradesh, India
                </p>
                <p>
                  <strong>Email:{" "}</strong>
                  <a
                    href="mailto:a5x.industries@gmail.com"
                    className="text-cyan-400 hover:underline"
                  >
                    a5x.industries@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Response time:</strong> Within 30 days of receiving your grievance.
                </p>
              </div>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, technology, or legal requirements. The &quot;Last updated&quot; date at the
                top of this page will always reflect the most recent revision. We encourage you
                to review this policy periodically. For significant changes, we will notify you
                via email (if we hold your email address) or through a prominent notice on our
                website.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Us</h2>
              <p className="mb-4">
                For any questions, requests, or concerns about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 space-y-2">
                <p>
                  <strong>A5X Industries Pvt Ltd</strong>
                </p>
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
                This policy is publicly accessible at{" "}
                <a href="https://a5x.in/privacy-policy" className="text-cyan-400 hover:underline">
                  https://a5x.in/privacy-policy
                </a>{" "}
                without requiring login. By using our website or Services, you confirm that you
                have read and understood this Privacy Policy.
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
