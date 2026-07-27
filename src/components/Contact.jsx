import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  contactNumber: "",
  notes: "",
};

const validateForm = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.contactNumber.trim()) {
    errors.contactNumber = "Please enter your phone number.";
  }

  if (!data.notes.trim()) {
    errors.notes = "Please tell us a little about your project.";
  }

  return errors;
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errorData, setErrorData] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errMes, setErrMes] = useState("");

  const handleFormUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear a field's error as soon as the user edits it.
    setErrorData((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    setErrorData(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    const body = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      formData: {
        notes: formData.notes,
      },
    };
    fetch("https://api.leadx.in/api/key/protected/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apiKey: "djene1jg7eo1y0l22w6p",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        // The API returns { success, status, message } — surface its message on failure.
        if (!data.success || data.status === "fail") {
          throw new Error(
            data.message ||
              "We couldn't send your message right now. Please try again in a moment.",
          );
        }
        setFormData(initialFormData);
        setStatus("success");
      })
      .catch((error) => {
        // Log the raw error for debugging, but show the visitor a friendly message.
        console.error("Error:", error);
        setStatus("error");
        setErrMes(
          error instanceof TypeError
            ? "Network error — please check your connection and try again."
            : error.message ||
                "Something went wrong while sending your message. Please try again or email us directly.",
        );
      });
  };

  const inputClass = (field) =>
    `w-full p-4 bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 ${
      errorData[field] ? "ring-2 ring-red-500" : ""
    }`;

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Let's Discuss Your Project
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-3xl font-semibold mb-4">
              info@simuwerkindia.com
            </p>
            <p className="text-3xl font-semibold mb-8">+91 92709 41867</p>
            <p className="text-xl">Pune / Kolhapur • Germany • UK</p>
            <br />
            <p className="text-xl">
              Office No: 402; 4th floor, Office Tower, Vision One, Near Bhumkar
              Chowk, Tathawade Pune 411033
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className={inputClass("name")}
                onChange={handleFormUpdate}
                value={formData.name}
                name="name"
                aria-invalid={Boolean(errorData.name)}
              />
              {errorData.name && (
                <p className="mt-2 text-sm text-red-400">{errorData.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className={inputClass("email")}
                onChange={handleFormUpdate}
                value={formData.email}
                name="email"
                aria-invalid={Boolean(errorData.email)}
              />
              {errorData.email && (
                <p className="mt-2 text-sm text-red-400">{errorData.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number (+91 9270941867)"
                className={inputClass("contactNumber")}
                onChange={handleFormUpdate}
                value={formData.contactNumber}
                name="contactNumber"
                aria-invalid={Boolean(errorData.contactNumber)}
              />
              {errorData.contactNumber && (
                <p className="mt-2 text-sm text-red-400">
                  {errorData.contactNumber}
                </p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Tell us about your project (Sugar Plant / Pump / Boiler etc.)"
                rows="6"
                className={inputClass("notes")}
                onChange={handleFormUpdate}
                value={formData.notes}
                name="notes"
                aria-invalid={Boolean(errorData.notes)}
              ></textarea>
              {errorData.notes && (
                <p className="mt-2 text-sm text-red-400">{errorData.notes}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-green-400">
                <CheckCircle2 className="w-5 h-5" />
                Thanks! We've received your message and will be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400">
                {errMes ||
                  "Something went wrong while sending your message. Please try again or email us directly."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
