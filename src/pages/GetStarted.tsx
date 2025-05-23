import Layout from "../components/Layout";

const GetStarted = () => (
  <Layout>
    <section className="bg-[#0C0F3F] text-white py-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          Let’s Design Your AI Agent Together
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Tell us what you need and we’ll help you plan the perfect AI system — no pressure, just discovery.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-xl mx-auto max-w-2xl">
          {/* ¡Sólo el div! */}
          <div class="ml-embedded" data-form="WyCvO1"></div>
        </div>
      </div>
    </section>
  </Layout>
);

export default GetStarted;
