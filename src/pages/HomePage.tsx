import { avatar, facebook, github, greenwich, linkedin } from '@/assets/images'
import { Card } from '@/components'
import {
  CVLink,
  email,
  FBLink,
  GitHubLink,
  LinkedInLink,
  phoneNumber,
  projects,
  skills,
} from '@/data/source'
import {
  ArrowDownTrayIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const navigate = useNavigate()

  const description = `I graduated with a Bachelor's degree in Information Technology from the University of Greenwich, Vietnam (Hanoi campus). I am passionate about technology and curious about many different fields, but my main focus is currently on web and mobile development as a full-stack developer. I am always eager to listen, learn, and improve myself.\n\nOutside of work, I enjoy reading about history, swimming, football, badminton, traveling across the country, gaming, and cooking.\n\nWelcome to my portfolio! Here, you will find highlights of my projects and experiences.\nFeel free to get in touch - I am always excited to connect and collaborate.`

  return (
    <>
      <section id="about" className="min-h-dvh pt-24">
        <Card>
          <div className="flex">
            <div className="flex-1">
              <h1>
                Hi. I'm <span className="text-primary">Vuong Vu</span>
              </h1>
              <h5 className='mt-2 mb-6 text-primary'>Software Engineer</h5>
              <p className="text-justify whitespace-pre-wrap">{description}</p>
            </div>
            <div className="grid w-2/5 place-items-center">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-64 rounded-full ring-2 ring-offset-2">
                  <img src={avatar} alt="avatar" className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-x-6">
            <button
              className="btn btn-outline btn-primary"
              onClick={() => window.open(CVLink, '_blank', 'noopener,noreferrer')}
            >
              Résumé
              <ArrowDownTrayIcon className="w-3.5" strokeWidth={2.0} />
            </button>
            <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
              <img src={github} className="h-8" alt="github" />
            </a>
            <a href={FBLink} target="_blank" rel="noopener noreferrer">
              <img src={facebook} className="h-8" alt="facebook" />
            </a>
            <a href={LinkedInLink} target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className="h-8" alt="linkedin" />
            </a>
          </div>
        </Card>
      </section>
      <section id="education" className="min-h-dvh pt-8">
        <h2 className="mb-8 text-center">Education</h2>
        <div className="grid justify-items-center">
          <Card className="flex items-center gap-x-6 transition-all duration-200 hover:-translate-y-2 hover:transform hover:shadow-md">
            <a href="https://greenwich.edu.vn" target="_blank" rel="noopener noreferrer">
              <img src={greenwich} className="w-16" alt="greenwich university" />
            </a>
            <div>
              <h5>Bachelor of Information Technology</h5>
              <div className="flex justify-between">
                <p>Greenwich Vietnam</p>
                <p>Hanoi, Vietnam</p>
              </div>
              <p className="caption text-sm">2019 - 2024</p>
              <ul className="mt-1 list-inside list-disc text-sm">
                <li>GPA 68/100</li>
                <li>Fourth prize in the Greenwich Coding Challenge ver 4</li>
              </ul>
            </div>
          </Card>
        </div>
        <div id="experience" className="mt-8">
          <h2 className="mb-8 text-center">Experience</h2>
          <div className="grid justify-items-center">
            <Card className="transition-all duration-200 hover:-translate-y-2 hover:transform hover:shadow-md">
              <h5>Flutter Intern</h5>
              <div className="flex justify-between">
                <p>Toshiba Software Development</p>
                <p>Hanoi, Vietnam</p>
              </div>
              <p className="caption text-sm">Aug - Dec 2024</p>
              <ul className="mt-1 list-inside list-disc text-sm">
                <li>
                  Collaborated with other students to develop a mobile app for health and
                  fitness tracking
                </li>
                <li>Developed the user interface for the app using Flutter</li>
                <li>
                  Integrated the application with fitness tracking and analytics modules
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section id="skills" className="min-h-dvh pt-8">
        <h2 className="mb-14 text-center">Skills</h2>
        <div className="grid grid-cols-2 gap-8">
          {skills.map((item, idx) => (
            <Card
              key={idx}
              className="transition-all duration-200 hover:-translate-y-2 hover:transform hover:shadow-md"
            >
              <div className="flex items-center gap-x-2">
                <img src={item.image} className="text-primary h-6" alt={item.name} />
                <h5>{item.name}</h5>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {item.tech.map((v, i) => (
                  <div key={i} className="badge badge-soft badge-info">
                    {v}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section id="projects" className="min-h-dvh pt-8">
        <h2 className="mb-14 text-center">Projects</h2>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((item, i) => (
            <div
              key={i}
              className="group card bg-base-100 overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-2 hover:transform hover:shadow-lg"
            >
              <a href={item.descUrl} target="_blank" rel="noopener noreferrer">
                <figure className="relative">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="absolute top-0 right-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img src={item.images[1]} alt={item.name} />
                </figure>
              </a>
              <div
                className="card-body cursor-pointer"
                onClick={() => navigate('#about')}
              >
                <a
                  href={item.descUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  onClick={e => e.stopPropagation()}
                >
                  <h2 className="h6">{item.name}</h2>
                  <p className="caption mt-1">{item.description}</p>
                </a>
                <div className="flex flex-wrap gap-1">
                  {item.hashtags.map((h, j) => (
                    <div key={j} className="badge badge-sm badge-soft badge-info">
                      {h}
                    </div>
                  ))}
                </div>
                <div className="card-actions mt-4 justify-end">
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-primary btn-sm"
                    onClick={e => e.stopPropagation()}
                  >
                    Code
                  </a>
                  {!item.url || (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-primary btn-sm"
                      onClick={e => e.stopPropagation()}
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="mt-1 min-h-[calc(100dvh-60px)] pt-8">
        <h2 className="mb-14 text-center">Contact</h2>
        <div>
          <p className="font-medium">
            I’m always open to exploring opportunities in research, internships, or
            meaningful collaborations.
            <br />
            You can reach me directly at:
          </p>
          <div className="mt-10 flex w-fit flex-col gap-y-4">
            <a href={'mailto:' + email} className="flex items-center gap-x-2">
              <EnvelopeIcon className="caption h-5" />
              <span className="link-hover text-sm">{email}</span>
            </a>
            <a href={'tel:' + phoneNumber} className="flex items-center gap-x-2">
              <PhoneIcon className="caption h-5" />
              <p className="link-hover text-sm">
                {phoneNumber.match(/.{1,3}/g)?.join(' ')}
              </p>
            </a>
            <div className="flex items-center gap-x-2">
              <MapPinIcon className="caption h-5" />
              <p className="text-sm">Hanoi, Vietnam</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
