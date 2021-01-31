#!/usr/bin/env node

/*
 * File: DemoCli.js
 * Description: Cli Demo
 * Created: 2021-1-23 14:33:58
 * Author: yuzhanglong
 * Email: yuzl1123@163.com
 */

import { program } from 'commander'
import CoreManager from './coreManager'
import 'source-map-support/register'

const DEFAULT_NAME = 'hello-serendipity'

// 初始化 manager
const manager = new CoreManager(process.argv)

// 版本信息
program.version(`serendipity ${require('../package').version}`)

// serendipity create
program
  .command('create [app-name]')
  .description('开始创建一个前端项目(*^▽^*)~')
  .option('-t --type <projectType>', '项目类型', 'react')
  .option('-s --service <serviceName>', '自定义项目管理包')
  .option('-g --initGit', '初始化 git', false)
  .option('-c --commit', '初始化 commit 信息，只有选择初始化 git 时有效', 'initial commit')
  .action(async (name, opt) => {
    if (!name) {
      name = DEFAULT_NAME
    }
    await manager.create(name, opt)
  })


program.parse(process.argv)