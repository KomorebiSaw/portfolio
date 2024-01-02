import clsx from 'clsx'
import React, { useEffect } from 'react'
import MyLayout from '@site/src/theme/MyLayout'
import styles from './about.module.css'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDjango,
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiJest,
  SiFigma,
  SiDrone,
  SiJenkins,
  SiTrello,
  SiNginx,
  SiDocker,
  SiDocusaurus,
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiFlask,
  SiAntdesign,
  SiVuedotjs,
} from "react-icons/si";
import GitHubCalendar from "react-github-calendar";


export default function About() {
  return (
    <MyLayout maxWidth={1280}>
      <section className='relative pt-[150px] pb-[30px] w-full mx-auto xl:max-w-[1140px]'>
        <div className='flex justify-center items-center'>
          <div className='w-7/12'>
            <h1 className='text-4xl pb-2xl'>About Me</h1>
            <div className='flex-1 text-xl'>
              <p>
                Hello, I am <span className='text-purple'>Kent River</span>
                <br />
                写过3年 Python Web 后端, 也会写 Python 爬虫, 因为机缘一直写前端到现在;
                <br />
                曾在疫情期间作为前端主力维护过省级核酸小程序;
                <br />
                有5年前端和3年后端经验, 现在主攻 TS 全栈方向
                <br />
                <br />
                除了编码之外，我还喜欢
                <br />
                <br />
              </p>
              <ul>
                <li className='pl-1'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    version='1.1'
                    viewBox='0 0 16 16'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z'></path>
                  </svg>{' '}
                  Play video games
                </li>
                <li className='pl-1'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    version='1.1'
                    viewBox='0 0 16 16'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z'></path>
                  </svg>{' '}
                  Play badminton
                </li>
                <li className='pl-1'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    version='1.1'
                    viewBox='0 0 16 16'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z'></path>
                  </svg>{' '}
                  Read books
                </li>
              </ul>
              <br />
              <p className='text-center' style={{ color: 'rgb(155, 126, 172)' }}>
                "生命不息, 折腾不止!"
              </p>
              <footer className={clsx('text-center', styles['blockquote-footer'])}>Kent</footer>

            </div>
          </div>
          <div className='w-5/12'>
            <img className='max-w-full h-auto' src='/img/about.png' />
          </div>
        </div>

        <div className='mt-16'>
          <h1 className='text-center text-4xl'>
            Professional <span className='text-purple'>Skillset</span>
          </h1>
          <div className='flex flex-wrap text-white text-center'>
            <div className={styles['tech-icons']}>
              <DiJavascript1 />
            </div>
            <div className={styles['tech-icons']}>
              <DiReact />
            </div>
            <div className={styles['tech-icons']}>
              <DiNodejs />
            </div>
            <div className={styles['tech-icons']}>
              <DiPython />
            </div>
            <div className={styles['tech-icons']}>
              <DiMongodb />
            </div>
            <div className={styles['tech-icons']}>
              <DiGit />
            </div>
            <div className={styles['tech-icons']}>
              <DiDjango />
            </div>
            <div className={styles['tech-icons']}>
              <SiRedis />
            </div>
            <div className={styles['tech-icons']}>
              <SiNextdotjs />
            </div>
            <div className={styles['tech-icons']}>
              <SiPostgresql />
            </div>
            <div className={styles['tech-icons']}>
              <SiTypescript />
            </div>
            <div className={styles['tech-icons']}>
              <SiTailwindcss />
            </div>
            <div className={styles['tech-icons']}>
              <SiNestjs />
            </div>
            <div className={styles['tech-icons']}>
              <SiJest />
            </div>

            <div className={styles['tech-icons']}>
              <SiDocusaurus />
            </div>

            <div className={styles['tech-icons']}>
              <SiMacos />
            </div>
            <div className={styles['tech-icons']}>
              <SiFlask />
            </div>
            <div className={styles['tech-icons']}>
              <SiAntdesign />
            </div>
            <div className={styles['tech-icons']}>
              <SiVuedotjs />
            </div>
          </div>
          <h1 className='text-center text-4xl'>
            <span className='text-purple'>Tools</span> I use
          </h1>
          <div className='flex flex-wrap text-white text-center'>
            <div className={styles['tech-icons']}>
              <SiVisualstudiocode />
            </div>
            <div className={styles['tech-icons']}>
              <SiFigma />
            </div>
            <div className={styles['tech-icons']}>
              <SiDrone />
            </div>
            <div className={styles['tech-icons']}>
              <SiJenkins />
            </div>
            <div className={styles['tech-icons']}>
              <SiTrello />
            </div>
            <div className={styles['tech-icons']}>
              <SiNginx />
            </div>
            <div className={styles['tech-icons']}>
              <SiDocker />
            </div>
            <div className={styles['tech-icons']}>
              <SiPostman />
            </div>
            <div className={styles['tech-icons']}>
              <SiSlack />
            </div>
            <div className={styles['tech-icons']}>
              <SiVercel />
            </div>
          </div>
          <h1 className='text-center text-4xl'>
            Days I <span className='text-purple'>Code</span>
          </h1>
          <div>
            <GitHubCalendar
              username="Komorebi4829"
              blockSize={15}
              blockMargin={5}
              theme={{
                light: [
                  'hsl(0, 0%, 92%)',
                  'hsla(272, 85%, 74%, 0.44)',
                  'hsla(272, 85%, 74%, 0.6)',
                  'hsla(272, 85%, 74%, 0.76)',
                  'hsla(272, 85%, 74%, 0.92)',
                ]
              }}
              fontSize={16}
            />
          </div>
        </div>
      </section>
    </MyLayout >
  )
}
