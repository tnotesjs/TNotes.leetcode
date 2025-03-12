import minimist from 'minimist'

import ReadmeUpdater from './update.js'
import { mergeNotes, distributeNotes } from './merge_distribute.js'
import { syncRepo } from './utils/index.js'
import { __dirname } from './constants.js'

;(async () => {
  const args = minimist(process.argv)

  if (args.update) {
    const updater = new ReadmeUpdater()
    updater.updateReadme()
    await syncRepo()
  }

  if (args.sync) await syncRepo()
  if (args.merge) mergeNotes()
  if (args.distribute) distributeNotes()
})()
