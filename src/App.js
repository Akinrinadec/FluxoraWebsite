export default function App() {
  const accent = "#6C63FF";

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/447715409712?text=Hi%2C%20I%27m%20interested%20in%20AI%20automation%20for%20my%20business.",
      "_blank"
    );
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navButton = {
    background: "rgba(255,255,255,0.03)",
    color: "rgba(255,255,255,0.82)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "10px 18px",
    borderRadius: "999px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "700",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "28px",
    boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
  };

  const sectionTitle = {
    fontSize: "40px",
    marginBottom: "28px",
    fontWeight: "800",
  };

  const mutedText = {
    color: "rgba(255,255,255,0.72)",
    lineHeight: "1.8",
    fontSize: "17px",
  };

  const services = [
    {
      title: "WhatsApp Automation",
      text: "Automatically reply to customers, capture leads, and keep conversations moving 24/7.",
    },
    {
      title: "AI Assistants",
      text: "Use AI to handle enquiries, support questions, bookings, and repetitive tasks in your business.",
    },
    {
      title: "Social Media Integration",
      text: "Connect Instagram, Facebook, and other channels to one smart lead and response system.",
    },
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Enquiry comes in",
      text: "A customer messages through WhatsApp, your website, or social media.",
    },
    {
      number: "02",
      title: "AI responds instantly",
      text: "The system answers quickly, asks key questions, and captures the lead.",
    },
    {
      number: "03",
      title: "Lead gets organised",
      text: "The enquiry is stored properly so nothing gets lost or forgotten.",
    },
    {
      number: "04",
      title: "Follow-ups happen automatically",
      text: "Your business stays in front of potential customers without manual chasing.",
    },
  ];

  const faq = [
    {
      q: "Do I need an existing CRM?",
      a: "No. We can work with your current setup, or create a simple lead system if you do not already have one.",
    },
    {
      q: "Can this work for my type of business?",
      a: "Yes. If your business receives enquiries, leads, bookings, or customer messages, automation can usually improve response speed and conversion.",
    },
    {
      q: "How long does setup take?",
      a: "Simple systems can be set up quite quickly. More advanced builds depend on the number of workflows and integrations involved.",
    },
    {
      q: "Do you offer ongoing support?",
      a: "Yes. Ongoing support and optimisation can be offered depending on the package and what your business needs.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top center, rgba(108,99,255,0.14) 0%, rgba(108,99,255,0.03) 18%, transparent 38%), linear-gradient(180deg, #0a0a0f 0%, #10111d 55%, #111122 100%)",
        color: "white",
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
        padding: "28px 24px 90px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "76px",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "800" }}>Fluxora</div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              style={navButton}
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
            <button
              style={navButton}
              onClick={() => scrollToSection("pricing")}
            >
              Pricing
            </button>
            <button
              style={navButton}
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </button>
            <button style={navButton} onClick={() => scrollToSection("faq")}>
              FAQ
            </button>
          </div>
        </div>

        <div>
          <div
            style={{
              display: "inline-block",
              padding: "8px 16px",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: "999px",
              color: "rgba(255,255,255,0.82)",
              fontSize: "14px",
              marginBottom: "28px",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            AI automation for lead-based businesses
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.08",
              margin: "0 0 26px",
              letterSpacing: "-1.6px",
              maxWidth: "900px",
              fontWeight: "800",
            }}
          >
            Turn more enquiries into paying customers automatically
          </h1>

          <p
            style={{
              ...mutedText,
              fontSize: "22px",
              maxWidth: "850px",
              margin: "0 0 20px",
            }}
          >
            We help businesses reply faster, automate follow-ups, capture more
            leads, and stop losing enquiries across WhatsApp, websites, and
            social media.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.58)",
              lineHeight: "1.8",
              fontSize: "17px",
              maxWidth: "820px",
              margin: 0,
            }}
          >
            Ideal for any business that relies on leads, bookings, or customer
            enquiries, including real estate, trades, clinics, service
            businesses, and more.
          </p>

          <div
            style={{
              marginTop: "34px",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={openWhatsApp}
              style={{
                background: accent,
                color: "white",
                border: "none",
                padding: "16px 28px",
                borderRadius: "14px",
                fontWeight: "800",
                cursor: "pointer",
                fontSize: "16px",
                boxShadow: "0 12px 30px rgba(108,99,255,0.35)",
              }}
            >
              Book Free Consultation
            </button>

            <button
              onClick={() => scrollToSection("services")}
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "16px 28px",
                borderRadius: "14px",
                fontWeight: "800",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              See Services
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "90px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "22px" }}>24/7 Replies</h3>
            <p style={{ ...mutedText, margin: 0 }}>
              Respond to enquiries instantly, even when your team is busy or
              offline.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "22px" }}>
              Better Lead Conversion
            </h3>
            <p style={{ ...mutedText, margin: 0 }}>
              Capture more opportunities by automating follow-ups and keeping
              leads engaged.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "22px" }}>Less Manual Work</h3>
            <p style={{ ...mutedText, margin: 0 }}>
              Remove repetitive admin and let automation handle common customer
              interactions.
            </p>
          </div>
        </div>

        <div id="services" style={{ marginTop: "90px" }}>
          <h2 style={sectionTitle}>Services</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "22px",
            }}
          >
            {services.map((item) => (
              <div key={item.title} style={cardStyle}>
                <h3 style={{ marginTop: 0, fontSize: "24px" }}>{item.title}</h3>
                <p style={{ ...mutedText, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="pricing" style={{ marginTop: "90px" }}>
          <h2 style={sectionTitle}>Pricing</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "22px",
            }}
          >
            <div style={cardStyle}>
              <h4 style={{ color: accent, letterSpacing: "1px" }}>
                LITE SETUP
              </h4>
              <h3 style={{ fontSize: "30px", marginTop: 0 }}>From AED 6,000</h3>
              <p style={mutedText}>
                A simple starting point for businesses wanting basic automation
                in place.
              </p>
              <ul style={mutedText}>
                <li>Basic lead capture flow</li>
                <li>WhatsApp or web enquiry automation</li>
                <li>Simple follow-up setup</li>
              </ul>
            </div>

            <div
              style={{
                ...cardStyle,
                border: `1px solid ${accent}`,
                boxShadow: "0 18px 44px rgba(108,99,255,0.18)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: accent,
                  color: "white",
                  borderRadius: "999px",
                  padding: "6px 12px",
                  fontSize: "12px",
                  fontWeight: "800",
                  float: "right",
                }}
              >
                MOST POPULAR
              </div>

              <h4 style={{ color: accent, letterSpacing: "1px" }}>GROWTH</h4>
              <h3 style={{ fontSize: "30px", marginTop: 0 }}>
                From AED 12,000
              </h3>
              <p style={mutedText}>
                Best for businesses that want proper lead handling, follow-ups,
                and automation that drives results.
              </p>
              <ul style={mutedText}>
                <li>Multi-step automation flow</li>
                <li>Lead qualification questions</li>
                <li>CRM or lead system integration</li>
                <li>Follow-up sequence setup</li>
              </ul>
            </div>

            <div style={cardStyle}>
              <h4 style={{ color: accent, letterSpacing: "1px" }}>ADVANCED</h4>
              <h3 style={{ fontSize: "30px", marginTop: 0 }}>
                From AED 25,000
              </h3>
              <p style={mutedText}>
                For businesses wanting a more advanced AI assistant,
                cross-platform workflows, and deeper automation.
              </p>
              <ul style={mutedText}>
                <li>Advanced AI assistant setup</li>
                <li>Cross-platform lead management</li>
                <li>Tailored automation journeys</li>
                <li>Reporting and optimisation options</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="how-it-works" style={{ marginTop: "90px" }}>
          <h2 style={sectionTitle}>How It Works</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "22px",
            }}
          >
            {howItWorks.map((item) => (
              <div key={item.number} style={cardStyle}>
                <div
                  style={{
                    color: accent,
                    fontSize: "14px",
                    fontWeight: "800",
                    marginBottom: "12px",
                  }}
                >
                  {item.number}
                </div>
                <h3 style={{ marginTop: 0, fontSize: "23px" }}>{item.title}</h3>
                <p style={{ ...mutedText, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "90px" }}>
          <h2 style={sectionTitle}>Example Conversation</h2>

          <div style={{ ...cardStyle, maxWidth: "560px" }}>
            <p style={mutedText}>
              <strong style={{ color: "white" }}>Customer:</strong> Hi, I need a
              quote
            </p>
            <p style={{ ...mutedText, color: accent }}>
              <strong>Bot:</strong> Sure — what type of work do you need?
            </p>
            <p style={mutedText}>
              <strong style={{ color: "white" }}>Customer:</strong> Kitchen
              cabinets
            </p>
            <p style={{ ...mutedText, color: accent, marginBottom: 0 }}>
              <strong>Bot:</strong> Great — when would you like this done?
            </p>
          </div>
        </div>

        <div style={{ marginTop: "90px" }}>
          <h2 style={sectionTitle}>Before vs After</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "22px",
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Without automation</h3>
              <ul style={mutedText}>
                <li>Missed messages</li>
                <li>Slow replies</li>
                <li>Lost follow-ups</li>
                <li>Leads falling through the cracks</li>
              </ul>
            </div>

            <div style={{ ...cardStyle, border: `1px solid ${accent}` }}>
              <h3 style={{ marginTop: 0, color: accent }}>With Fluxora</h3>
              <ul style={mutedText}>
                <li>Instant replies</li>
                <li>Leads captured automatically</li>
                <li>Automated follow-up flow</li>
                <li>Better conversion from existing enquiries</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="faq" style={{ marginTop: "90px" }}>
          <h2 style={sectionTitle}>FAQ</h2>

          <div style={{ display: "grid", gap: "18px" }}>
            {faq.map((item) => (
              <div key={item.q} style={cardStyle}>
                <h3 style={{ marginTop: 0 }}>{item.q}</h3>
                <p style={{ ...mutedText, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "100px",
            textAlign: "center",
            padding: "46px 24px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(108,99,255,0.08))",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 style={{ fontSize: "38px", marginTop: 0 }}>
            Ready to stop losing leads?
          </h2>
          <p style={{ ...mutedText, maxWidth: "760px", margin: "0 auto 28px" }}>
            Book a free consultation and we’ll show you how AI, WhatsApp, and
            automation can help your business respond faster, follow up better,
            and convert more enquiries into paying customers.
          </p>
          <button
            onClick={openWhatsApp}
            style={{
              background: accent,
              color: "white",
              border: "none",
              padding: "16px 28px",
              borderRadius: "14px",
              fontWeight: "800",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
