import { List } from '~/components/list'
import { IconCard } from '~/components/card'
import BitbucketIcon from '~/components/icons/bitbucket'
import GitLabIcon from '~/components/icons/gitlab'
import GitHubIcon from '~/components/icons/github'

const GitImports = ({
  repoURL,
  hideGitHub = false,
  hideGitLab = false,
  hideBitbucket = false
}) => {
  const baseHref = 'https://vercel.com/import/git'

  const href = `${baseHref}${repoURL !== undefined ? `?s=${repoURL}` : ``}`

  return (
    <List columnsDesktop={3} columnsTablet={3} columnsMobile={1}>
      {hideGitHub !== true && (
        <IconCard label="GitHub" icon={<GitHubIcon />} href={href} plus />
      )}
      {hideGitLab !== true && (
        <IconCard label="GitLab" icon={<GitLabIcon />} href={href} plus />
      )}
      {hideBitbucket !== true && (
        <IconCard label="Bitbucket" icon={<BitbucketIcon />} href={href} plus />
      )}
    </List>
  )
}

export default GitImports
