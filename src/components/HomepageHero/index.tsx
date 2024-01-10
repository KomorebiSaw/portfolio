import clsx from 'clsx'
import React from 'react'
import Type from '@site/src/components/Type'
import HomeMainSvg from '@site/static/img/home-main.svg'
import AvatarSvg from '@site/static/img/avatar.svg'
import styles from './index.module.css'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Tilt from 'react-parallax-tilt'

export default function Hero() {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale
  console.log('lang', lang)
  return (
    <>
      <section className='w-full mx-auto color-[whitesmoke] text-left pt-36 pr-0 pb-8 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'>
        <div className='flex flex-wrap'>
          <div className='mt-[50px] w-full text-center lg:w-1/2 lg:text-left'>
            <h1 className='mb-[15px] text-5xl pl-[50px]'>
              <Translate id='homepage.hero.greet'>你好! </Translate>
              <span role='img' aria-labelledby='wave' className='wave'>
                👋🏻
              </span>
            </h1>
            <h1 className='mb-[15px] text-5xl pl-[50px]'>
              <Translate id='homepage.hero.im'>我是</Translate>
              <strong className='text-purple'>
                <Translate id='homepage.hero.name'> KENT </Translate>
              </strong>
            </h1>
            <div className='p-[50px] text-purple text-3xl font-semibold'>
              <Type />
            </div>
          </div>
          <div className='pb-[20px] max-w-full md:max-w-full lg:w-1/2'>
            <HomeMainSvg className='max-w-full h-auto max-h-[450px] align-middle' />
          </div>
        </div>
      </section>
      <section>
        <div className='w-full mx-auto my-20 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] '>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='w-full text-center lg:w-2/3 lg:text-left'>
              <h1 className='text-5xl'>
                <Translate id='homepage.introduce.letme'>让我</Translate>
                <span className='text-purple'>
                  <Translate id='homepage.introduce.introduce'>介绍</Translate>
                </span>
                <Translate id='homepage.introduce.myself'>自己</Translate>
              </h1>
              <p className='pt-[50px] text-xl text-left pb-4 mb-4 text-[#fff] px-8 lg:px-0'>
                {lang === 'zh-CN' && (
                  <>
                    通过多年的实践和项目经验，我掌握了前端和后端开发技术，能够熟练使用
                    <i>
                      <b className='text-purple'> Python，JavaScript/TypeScript </b>
                    </i>
                    编程语言。
                    <br />
                    <br />
                    我热衷于使用
                    <i>
                      <b className='text-purple'> React.js，Next.js，Nest.js </b>
                    </i>
                    构建出色的 <b className='text-purple'>Web应用程序，</b>
                    并且有丰富的实践经验。同时对计算机底层原理感兴趣。
                    <br />
                    <br />
                    我对自己的
                    <b className='text-purple'>代码质量</b>
                    非常重视，注重代码的结构性和可维护性，以确保项目的长期成功和可持续发展。我期待能够为您的项目带来价值，并与您
                    <b className='text-purple'>共同努力，</b>
                    创造出卓越的软件解决方案。
                  </>
                )}
                {lang !== 'zh-CN' && (
                  <>
                    I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                    <br />
                    <br />I am mastered in programming languages like
                    <i>
                      <b className='text-purple'> Python, JavaScript/TypeScript. </b>
                    </i>
                    I am passionate about building modern <b className='text-purple'>Web Applications</b> using
                    technologies like
                    <i>
                      <b className='text-purple'> React.js, Next.js, and Nest.js, </b>
                    </i>
                    and I have extensive hands-on experience in this field. I am also interested in the underlying
                    knowledge of computer science.
                    <br />
                    <br />I place great importance on the <b className='text-purple'>quality</b> of my code, focusing on
                    code structure and maintainability to ensure long-term success and sustainability of projects. I
                    look forward to
                    <b className='text-purple'> bringing value</b> to your projects and
                    <b className='text-purple'> working together </b>
                    to create exceptional software solutions.
                  </>
                )}
              </p>
            </div>
            <div className='w-full text-center lg:text-center lg:w-auto'>
              <Tilt>
                <AvatarSvg className='max-w-full h-auto' />
              </Tilt>
            </div>
          </div>
          <div>
            <div className='w-full text-center pt-14 '>
              <h1 className='text-5xl mb-3'>
                <Translate id='homepage.introduce.find_me_on'>联系我</Translate>
              </h1>
              {lang !== 'zh-CN' && (
                <p className='mb-5 text-xl'>
                  Feel free to <span className='text-purple'>connect </span>with me
                </p>
              )}
              <ul className='pt-6 inline-block relative ps-0 mb-2'>
                <li className={styles['social-icons']}>
                  <a
                    href='https://github.com/Komorebi4829'
                    target='_blank'
                    rel='noreferrer'
                    className={clsx(styles['icon-colour'], styles['home-social-icons'])}
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 1024 1024'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z'></path>
                    </svg>
                  </a>
                </li>
                <li className={styles['social-icons']}>
                  <a
                    href='https://twitter.com/kentkomorebi'
                    target='_blank'
                    rel='noreferrer'
                    className={clsx(styles['icon-colour'], styles['home-social-icons'])}
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 1024 1024'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z'></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
