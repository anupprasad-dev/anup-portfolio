import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_xgr6995",
        "template_60xzjan",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: "8hrJCzuhvUUDW4kWo",
        },
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Have a project, opportunity or just want to connect? Feel free to
            reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-white">Get In Touch</h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm open to discussing software development opportunities,
              projects and collaborations.
            </p>

            {/* Email */}
            <a
              href="mailto:your-email@gmail.com"
              className="mt-8 flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs text-slate-500">Email</p>

                <p className="text-sm">your-email@gmail.com</p>
              </div>
            </a>

            {/* Location */}
            <div className="mt-5 flex items-center gap-4 text-slate-300">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs text-slate-500">Location</p>

                <p className="text-sm">Hyderabad, India</p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/anupprasad-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/anupprasad-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            {/* Success Message */}
            {status === "success" && (
              <div className="mt-5 flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                <CheckCircle size={18} />
                Message sent successfully!
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="mt-5 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle size={18} />
                Failed to send message. Please try again.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}

              {!loading && <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
