'use client';

import {useTranslations, useLocale} from 'next-intl';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Создаем mailto ссылку
    const subject = `${t('contact.form.title')} ${name}`;
    const body = `${t('contact.form.name')}: ${name}\n${t('contact.form.email')}: ${email}\n\n${t('contact.form.message')}:\n${message}`;
    const mailtoLink = `mailto:vbflare.ai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Открываем почтовый клиент
    window.location.href = mailtoLink;
  };

  // Language switcher component
  const LanguageSwitcher = () => (
    <div className="flex space-x-2">
      <a href="/ru" className={`px-3 py-1 rounded ${locale === 'ru' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}>
        RU
      </a>
      <a href="/en" className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}>
        EN
      </a>
      <a href="/uz" className={`px-3 py-1 rounded ${locale === 'uz' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}>
        UZ
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">VB<span className="text-purple-400">flare</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-purple-400 transition-colors">{t('nav.services')}</a>
              <a href="#about" className="text-white hover:text-purple-400 transition-colors">{t('nav.about')}</a>
              <a href="#team" className="text-white hover:text-purple-400 transition-colors">{t('nav.team')}</a>
              <a href="#contact" className="text-white hover:text-purple-400 transition-colors">{t('nav.contact')}</a>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
                {t('nav.contactButton')}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t('hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-block">
              {t('hero.startProject')}
            </a>
            <button className="border-2 border-white/20 hover:border-purple-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10">
              {t('hero.viewPortfolio')}
            </button>
          </div>

          {/* Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('services.web.title')}</h3>
              <p className="text-gray-300">{t('services.web.description')}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('services.mobile.title')}</h3>
              <p className="text-gray-300">{t('services.mobile.description')}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('services.digital.title')}</h3>
              <p className="text-gray-300">{t('services.digital.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('about.title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('about.mission')}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('about.missionText')}
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-white">{t('about.achievements.portfolio')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-white">{t('about.achievements.experience')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                  <span className="text-white">{t('about.achievements.team')}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">10+</div>
                    <div className="text-gray-300">{t('about.stats.projects')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">3</div>
                    <div className="text-gray-300">{t('about.stats.specialists')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">4</div>
                    <div className="text-gray-300">{t('about.stats.experience')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-gray-300">{t('about.stats.quality')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('servicesDetailed.title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('servicesDetailed.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('servicesDetailed.web.title')}</h3>
              <p className="text-gray-300 mb-6">{t('servicesDetailed.web.description')}</p>
              <ul className="space-y-2 text-gray-400">
                {t.raw('servicesDetailed.web.features').map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('servicesDetailed.mobile.title')}</h3>
              <p className="text-gray-300 mb-6">{t('servicesDetailed.mobile.description')}</p>
              <ul className="space-y-2 text-gray-400">
                {t.raw('servicesDetailed.mobile.features').map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('servicesDetailed.analytics.title')}</h3>
              <p className="text-gray-300 mb-6">{t('servicesDetailed.analytics.description')}</p>
              <ul className="space-y-2 text-gray-400">
                {t.raw('servicesDetailed.analytics.features').map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('team.title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('team.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  ES
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('team.members.elyor.name')}</h3>
              <p className="text-purple-400 mb-3">{t('team.members.elyor.position')}</p>
              <p className="text-gray-300 text-sm">{t('team.members.elyor.description')}</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  DS
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('team.members.dilshod.name')}</h3>
              <p className="text-blue-400 mb-3">{t('team.members.dilshod.position')}</p>
              <p className="text-gray-300 text-sm">{t('team.members.dilshod.description')}</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  SS
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('team.members.shahriyor.name')}</h3>
              <p className="text-green-400 mb-3">{t('team.members.shahriyor.position')}</p>
              <p className="text-gray-300 text-sm">{t('team.members.shahriyor.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">{t('contact.info')}</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t('contact.details.email')}</p>
                    <a href="mailto:vbflare.ai@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">vbflare.ai@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t('contact.details.phone')}</p>
                    <a href="tel:+998971279907" className="text-gray-300 hover:text-purple-400 transition-colors">+998971279907</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t('contact.details.address')}</p>
                    <p className="text-gray-300">Тошкент, ул Махтумкули</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name')}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.email')}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder={t('contact.form.message')}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
