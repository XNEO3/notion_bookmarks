'use client'

import { WebsiteConfig } from '@/types/notion'
import { FaGithub, FaXTwitter, FaWeibo } from 'react-icons/fa6'
import { FaBlogger } from 'react-icons/fa'
import Image from 'next/image'

interface FooterProps {
  config: WebsiteConfig
}

export default function Footer({ config }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t py-4 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center space-x-4">
            {config.SOCIAL_GITHUB && (
              <a
                href={config.SOCIAL_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {config.SOCIAL_BLOG && (
              <a
                href={config.SOCIAL_BLOG}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Blog"
              >
                <FaBlogger className="w-5 h-5" />
              </a>
            )}
            {config.SOCIAL_X && (
              <a
                href={config.SOCIAL_X}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="X (Twitter)"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            )}
            {config.SOCIAL_JIKE && (
              <a
                href={config.SOCIAL_JIKE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="即刻"
              >
                <Image
                  src="/logo_jike.png"
                  alt="即刻"
                  width={20}
                  height={20}
                  className="filter-muted hover:filter-none transition-all"
                />
              </a>
            )}
            {config.SOCIAL_WEIBO && (
              <a
                href={config.SOCIAL_WEIBO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="微博"
              >
                <FaWeibo className="w-5 h-5" />
              </a>
            )}
          </div>
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <p className="hidden md:block text-sm text-muted-foreground">
              Built with Next.js and Notion
            </p>
            <p className="text-sm text-muted-foreground">
              2025 {config.SITE_AUTHOR}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
