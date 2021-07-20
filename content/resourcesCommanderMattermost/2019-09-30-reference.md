---
title: Reference
status: Published
index: '3'
anchor-subject:
  - anchor: Commands
    anchor-item:
      - anchor: ''
        body: >-
          Shows the version of Commander installed, a link to license
          information and a link to documentation.


          Output: Visible to everyone in the channel (in_channel).


          User restrictions: None.
        title: /nc
      - anchor: account_info
        body: >-
          Shows information about the Commander account associated with the
          current Mattermost workspace including the plan the account is on
          (free or paid tier) and any account limits.


          **Examples:**


          | /nc account_info | displays information about your Commander account
          |

          | ---------------- | -------------------------------------------------
          |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: None.
        title: /nc account_info
      - anchor: account_upgrade
        body: >-
          Shows a link that allows you to upgrade your Commander account to a
          paid plan or higher tier.


          **Examples:**


          | /nc account_upgrade | shows a link to the account upgrade web page |

          | ------------------- | -------------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: None.
        title: /nc account_upgrade
      - anchor: activation_log
        body: >-
          Shows the logs and the response of the user command that was last
          executed in the current app. With activation id as an optional
          parameter, the logs of any user command can be fetched.


          Examples:


          |/nc activation_log|  Fetches the last logs of the command executed by
          the user |

          | --------------------------- |
          ------------------------------------------------------------ |

          |/nc activation_log 18e9aaf9e92a4fdca9aaf9e92a8fdc43| Fetches the logs
          of the specified activation id |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app's admin users.
        title: '/nc activation_log [activation_id]'
      - anchor: app_add
        body: >-
          After creating a Mattermost app, run this command to connect it to
          Commander. You can use any word as the <app> identifier. The
          <command_prefix> is the Mattermost slash command prefix (like /devops)
          that will be used by users to prefix all the commands they run.


          The user who creates the app becomes an admin of the app. If you ever
          need to see the app's Request URL later, you can run the app_info
          command.


          The newly added app becomes your current app for all /nc commands.


          **Example:**


          | /nc app_add devops /devops | creates an app called devops with
          command prefix /devops |

          | -------------------------- |
          -------------------------------------------------------- |


          > Output: Only visible to you (ephemeral).

          > User restrictions: None.
        title: /nc app_add <app> <command_prefix>
      - anchor: app_admins
        body: >-
          Without any parameters, shows the list of Mattermost users who are
          administrative users for the current app.


          With parameters, adds or removes Mattermost users as app admins.
          <user> is a Mattermost username such as @tim. When adding or removing
          users, there is a space between the plus or minus and the Mattermost
          username.


          A number of Commander commands can only be run by users who are an
          app's admin. By default the user who created the app is the admin for
          the app. Groups can't be added as admins, only individual Mattermost
          users can be added as admins.


          **Examples:**


          | /nc app_admins                      | lists the app's
          admins                                        |

          | ----------------------------------- |
          ------------------------------------------------------------- |

          | /nc app_admins + @tim + @sue - @joe | adds @tim, @sue and removes
          @joe as admins of the current app |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app's admin users.
        title: '/nc app_admins [+ <user>] [- <user>] ...'
      - anchor: app_current
        body: >-
          Shows or sets the current app for all /nc commands. With no
          parameters, the current app is shown. Most /nc commands operate on the
          current app. Each Mattermost user has one current app.


          **Examples:**


          | /nc app_current        | displays your current app       |

          | ---------------------- | ------------------------------- |

          | /nc app_current devops | sets devops as your current app |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: None.
        title: '/nc app_current [<app>]'
      - anchor: app_delete
        body: >-
          Deletes the given app. The app will only be deleted if it is also the
          current app. All data associated with the app (commands, logs, etc.)
          are deleted along with the app. To prevent this command from being run
          on the wrong app, the command will display the current app and then
          ask you to add "confirm" to the end of the command before actually
          deleting the app.


          **Example:**


          | /nc app_delete devops | Deletes the devops app |

          | --------------------- | ---------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app's admin users.
        title: /nc app_delete <app>
      - anchor: app_desc
        body: >-
          Shows or sets the current app’s description.


          **Examples:**


          | /nc app_desc                                    | shows the current
          app's description |

          | ----------------------------------------------- |
          ----------------------------------- |

          | /nc app_desc "SQL database management commands" | sets the current
          app's description  |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: No restrictions for showing the description.
          Setting the description is restricted to the app’s admins.
        title: '/nc app_desc [<description>]'
      - anchor: app_info
        body: >-
          Shows information about the current app including: name, description,
          when it was created and which user created the app, the list of admin
          users and the Request URL that should be associated with the app's
          Mattermost slash command.


          **Example:**


          | /nc app_info | shows information about the current app |

          | ------------ | --------------------------------------- |


          > Output: Only visible to you (ephemeral).

          > User restrictions: Restricted to the app’s admins.
        title: /nc app_info
      - anchor: app_list
        body: |-
          Lists the existing apps for your Mattermost workspace.

          **Example:**

          | /nc app_list | lists the existing apps |
          | ------------ | ----------------------- |

          > Output: Visible to everyone in the channel (in_channel).
          > User restrictions: None.
        title: /nc app_list
      - anchor: app_log
        body: >-
          Shows 10 app command log lines for the current app. The app command
          log includes a log of all /nc and app commands run, showing the user
          who ran the command and the time the command was run in UTC time
          format.


          Without any parameters, the most recent 10 numbered log lines are
          shown. An optional "-from" parameter can be specified along with a log
          line number to show 10 log lines starting at the log line number.


          **Examples:**


          | /nc app_log          | shows the most recent 10 app command log
          lines        |

          | -------------------- |
          ----------------------------------------------------- |

          | /nc app_log -from 90 | shows 10 app log lines starting at log line
          number 90 |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: '/nc app_log [-from <line_number>]'
      - anchor: app_rename
        body: >-
          Renames the current app and sets the current app's command prefix. To
          change just the command prefix, pass the existing name of the current
          app as the first parameter.


          If you change the command prefix for your app, you must use also add
          the slash command for that prefix to your Mattermost app using
          Mattermost `Your Apps` management interface.


          **Examples:**


          | /nc app_rename devops /devops | sets the current app's name to
          devops and the current app's command prefix to /devops |

          | ----------------------------- |
          -------------------------------------------------------------------------------------
          |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins
        title: /nc app_rename <app> <command_prefix>
      - anchor: app_workbench
        body: >-
          Shows information allowing use of the Nimbella Workbench. The Nimbella
          Workbench allows development directly on the Nimbella Cloud. Free-tier
          Commander accounts do not have workbench access.


          You can use the [account_info]($account_info) command to view your
          Commander account and the [account_upgrade]($account_upgrade) command
          to upgrade your account to a higher tier.


          **Examples:**


          | /nc app_workbench | displays Nimbella Workbench account information
          and a link to get more information |

          | --------------------- |
          ----------------------------------------------------------------------------------
          |


          > Output: Only visible to you (ephemeral).

          > User restrictions: Restricted to the app's admin users.
        title: /nc app_workbench
      - anchor: channel_add
        body: >-
          Adds an output Mattermost channel and its associated Webhook URL to
          the current app.


          By default, apps do not have permission to post in a channel except
          when responding to Mattermost commands entered by its users. To allow
          an app to post output to a channel on its own, the app must be given a
          Mattermost Webhook URL for that channel. Tasks, for example, require a
          channel to be added with this command so they can post output when
          running commands on a schedule or at a rate.


          Mattermost then will show you a Webhook URL that can be used to post
          into the channel.


          Copy the Webhook URL to the clipboard. Then run the channel_add
          command giving it the channel name and paste in the the Webhook URL
          that was copied to the clipboard as a second parameter.


          Public channels should be prefixed with # (the pound sign). Private
          channels (direct message channels) should be prefixed with @ (the at
          sign).


          **Example:**


          | /nc channel_add #general
          https://mattermost.company.cloud.com/hooks/... | adds a public
          Mattermost output channel to the current app  |

          |
          -----------------------------------------------------------------------
          | ----------------------------------------------------------- |

          | /nc channel_add @tony
          https://mattermost.company.cloud.com/hooks/...    | adds a private
          Mattermost output channel to the current app |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc channel_add <mm_channel> <webhook_URL>
      - anchor: channel_delete
        body: >-
          Deletes a Mattermost output channel from the current app. This does
          not delete the channel in Mattermost or modify it in any way, it just
          deletes the channel and its webhook from the current app.


          **Example:**


          | /nc channel_delete #general | deletes the #general Mattermost output
          channel from the current app |

          | --------------------------- |
          ------------------------------------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc channel_delete <mm_channel>
      - anchor: channel_list
        body: >-
          Lists the Mattermost output channels and associated Webhook URLs for
          the current app.


          **Example:**


          | /nc channel_list | Lists the available Mattermost output channels
          for the current app |

          | ---------------- |
          ------------------------------------------------------------------ |


          > Output: Only visible to you (ephemeral).

          > User restrictions: None, however, channel Webhook URLs are only
          shown when the command is run by an app's admin.
        title: /nc channel_list
      - anchor: command_code
        body: >-
          Shows a link to the command's source code editor.


          **Example:**


          | /nc command_code add_host | shows a link to the source code editor
          for command add_host |

          | ------------------------- |
          ----------------------------------------------------------- |


          > Output: Only visible to you (ephemeral).

          > User restrictions: Restricted to the app’s admins or command's
          coders.
        title: /nc command_code <command>
      - anchor: command_coders
        body: >-
          Without any parameters, shows the list of Mattermost users and user
          groups who are allowed to view and edit the source code for the
          command.


          With parameters, adds or removes Mattermost users or groups of users
          as coders who can view or edit the source code for the command. <user>
          is a Mattermost username such as @tim. <group> is a group name created
          with [group_create]($group_create). When adding or removing users or
          groups, there is a space between the plus or minus and the Mattermost
          username or group name.


          App admins users can view and edit source code for any command in the
          app, they do not need to be added as coders. 


          **Example:**


          | /nc command_coders add_host                           | lists the
          coders for the add_host
          command                                                |

          | ----------------------------------------------------- |
          ----------------------------------------------------------------------------------------
          |

          | /nc command_coders add_host + @tim + dev_group - @joe | adds user
          @tim, group dev_group and removes user @joe as coders for the add_host
          command |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app's admin users.
        title: >-
          /nc command_coders <command> [+ <user>] [- <user>] [+ <group>] [-
          <group>] ...
      - anchor: command_create
        body: >-
          Creates a command. Shows a link to command's source code editor.


          A newly created command can only be run by the app's admin users. To
          allow other Mattermost users to run the command, use the
          [command_runners]($command_runners) command to allow individual groups
          or users to run the command. If you want anyone to be able to run the
          command, add the special group "anyone" with
          [command_runners]($command_runners).


          Command parameters are specified within < > brackets. For example,
          this creates a quota command that takes a single "salesperson"
          parameter:


          > ##### /nc command_create quota <salesperson>


          If the command was part of the nc app with a command prefix of /nc and
          a user ran the command with:


          > ##### /nc quota phil


          Then the source code for the quota command could access the
          <salesperson> parameter as the 'params.salesperson' input parameter.


          ```

          if (params.salesperson == "phil") ...

          ```


          Multiple parameters can be specified and a single optional command
          parameter may appear at the end of the parameter list in \[< >]
          brackets:


          > ##### /nc command_create quota <org> <salesperson> \[<value>]


          The above command could be run in the following ways:


          > ##### /nc quota joe

          >

          > ##### /nc quota joe 5


          Commands also support options. Options appear in \[ ] brackets and are
          always prefixed with a – dash. A command definition can have multiple
          options. When a command is run that includes options, the options may
          be specified in any order but they must appear at the end of the
          command.


          An option can be a name alone or a name value pair:


          > ##### /nc command_create quota <salesperson> \[-detail] \[-retry
          <retry_count>]


          If the a custom app with a slash command prefix of /sales was created
          and the current app was the sales app when the command_create above
          was run, the quota command could be run in any of the following ways:


          > ##### /sales quota joe

          >

          > ##### /sales quota joe -detail

          >

          > ##### /sales quota joe 5 -retry 5

          >

          > ##### /sales quota joe 5 -retry 5 -detail


          A variable number of arguments is supported by adding "..." to the end
          of the parameter list:


          > ##### /nc command_create quota <salesperson> ...


          When using "...", a user can enter any text at the end of the command.
          The extra text entered does not appear as input parameters. To parse
          out variable parameters, source code should parse the commandText
          string parameter. It includes the command just as it was entered by
          the user:


          ```

          let allParams = split(commandText, " "); ...

          ```


          An example with a complex definition:


          > ##### /nc command_create a <b> <c> \[<d>] \[-g] \[-h] \[-i <j>] ...


          For Mattermost apps created with the Mattermost app option "Escape
          channels, users and links" enabled; channel names, users and web link
          parameter values are passed to the command source code in expanded
          form, within brackets <>..


          **Examples:**


          | /nc command_create add_host               | creates a command
          add_host that takes no parameters                   |

          | ----------------------------------------- |
          ---------------------------------------------------------------------
          |

          | /nc command_create add_host ...           | creates a command
          add_host that takes a variable number of parameters |

          | /nc command_create add_host <host> <addr> | creates a command
          add_host that takes two parameters                  |


          > Output: Only visible to you (ephemeral).

          > User restrictions: Restricted to the app’s admins.
        title: '/nc command_create <command> [<parameters>] ...'
      - anchor: command_delete
        body: >-
          Deletes a command from the current app.


          **Example:**


          | /nc command_delete add_host | deletes the command add_host from the
          current app |

          | --------------------------- |
          ------------------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc command_delete <command>
      - anchor: command_desc
        body: >-
          Shows or sets a command's description.


          **Examples:**


          | /nc command_desc add_host                       | shows the
          description for command add_host |

          | ----------------------------------------------- |
          ------------------------------------------ |

          | /nc command_desc add_host "Adds a DNS hostname" | sets the
          description for command add_host  |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: No restrictions for showing the description.
          Setting the description is restricted to the app’s admins or command's
          coders.
        title: '/nc command_desc <command> [<description>]'
      - anchor: command_info
        body: >-
          Shows information about a command including: name, parameters,
          description, when it was created in UTC time, the user who created it,
          when the source code was last modified and which user last modified
          the command's source code.


          **Example:**


          | /nc command_info add_host | shows information about the command
          add_host |

          | ------------------------- |
          -------------------------------------------- |


          > Output: Only visible to you (ephemeral).

          > User restrictions: Restricted to the app’s admins or command's
          coders.
        title: /nc command_info <command>
      - anchor: command_list
        body: >-
          List all the app's commands. If a substring <substring_match> is
          given, only the commands with names or commands containing the
          substring are shown.


          **Examples:**


          | /nc command_list      | lists the app's
          commands                              |

          | --------------------- |
          ----------------------------------------------------- |

          | /nc command_list host | lists the app's commands that contain the
          word "host" |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: None.
        title: '/nc command_list [<substring_match>]'
      - anchor: command_log
        body: >-
          Shows 10 log lines for a command. As commands are run, they wrote log
          lines to the command log. The log includes the command parameters, the
          user who ran the command, the time the command was run in UTC time
          format, the execution time and HTTP response code.


          Without any parameters, the most recent 10 numbered log lines are
          shown. An optional "-from" parameter can be specified along with a log
          line number to show 10 log lines starting at the log line number.


          **Examples:**


          | /nc command_log add_host          | shows the most recent 10 log
          lines for the add_host command            |

          | --------------------------------- |
          ----------------------------------------------------------------------
          |

          | /nc command_log add_host -from 90 | shows 10 log lines starting at
          line number 90 for the add_host command |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins or command’s
          coders.
        title: '/nc command_log <command> [-from <index>]'
      - anchor: command_params
        body: >-
          Shows or sets a command's input parameters.


          See [command_create]($command_create) for how <parameters> are
          specified.


          Newly added parameters can be accessed in command source code using
          "params.<parameter_name>".


          **Examples:**


          | /nc command_params add_host                      | shows the
          parameters for command add_host         |

          | ------------------------------------------------ |
          ------------------------------------------------- |

          | /nc command_params add_host <host> <type> <addr> | changes the
          command add_host to take 3 parameters |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins or command’s
          coders.
        title: '/nc command_params <command> [<parameters>] ...'
      - anchor: command_runners
        body: >-
          Without any parameters, shows the list of Mattermost users and user
          groups who are allowed to run the command.


          With parameters, adds or removes Mattermost users or groups of users
          as runners who can run the command. <user> is a Mattermost username
          such as @tim. <group> is a group name created with
          [group_create]($group_create).


          There is a special group called "anyone" that always exists and that
          you can use to allow the command to be run by anyone.


          When adding or removing users or groups, there is a space between the
          plus or minus and the Mattermost username or group name.


          The special value "anyone" can be used to allow anyone to run the
          command.


          App admins users can run any command in the app, they do not need to
          be added as a runner. Coder users for a command can run the command,
          they do not need to be added as a runner. 


          **Examples:**


          | /nc command_runners add_host                           | lists the
          runners for the add_host
          command                                                |

          | ------------------------------------------------------ |
          -----------------------------------------------------------------------------------------
          |

          | /nc command_runners add_host + anyone                  | allows
          anyone to run the command
          add_host                                                 |

          | /nc command_runners add_host + @tim + dev_group - @joe | adds user
          @tim, group dev_group and removes user @joe as runners for the
          add_host command |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app's admin users.
        title: >-
          /nc command_runners <command> [+ <user>] [- <user>] [+ <group> 1] [-
          <group> N] ...
      - anchor: command_webhook
        body: >-
          Shows or sets a command's outgoing webhook URL. Setting a webhook URL
          for a command will cause the system to call out to the webhook URL
          instead of running the source code associated with the command.


          The special URL "clear" can be used to clear an existing webhook URL.


          **Examples:**


          | /nc command_webhook add_host                              | shows
          the custom webhook URL for command add_host |

          | --------------------------------------------------------- |
          ------------------------------------------------- |

          | /nc command_webhook add_host clear                        | clears
          any webhook URL for the command add_host   |

          | /nc command_webhook add_host https://nmb.com/d/addhost.js | sets the
          webhook URL for command add_host         |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins or command’s
          coders.
        title: '/nc command_webhook <command> [<webhook_URL>]'
      - anchor: csm_commands
        body: >-
          Without any parameters, shows the commands included in the command
          set.


          With parameters, adds or removes commands from the command set. When
          adding or removing commands, there is a space between the plus or
          minus and the command name.


          Individual commands cannot be included in multiple command sets.


          **Examples:**


          | /nc csm_commands sslcerts                            | lists the
          commands in the sslcerts command set                                |

          | ---------------------------------------------------- |
          -----------------------------------------------------------------------------
          |

          | /nc csm_commands sslcerts + ssl_expiry - host_update | adds command
          ssl_expiry and removes host_update from the sslcerts command set |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: '/nc csm_commands <command_set> [+ <command>] [- <command>] ...'
      - anchor: csm_create
        body: |-
          Creates a command set with the given name.

          **Example:**

          | /nc csm_create sslcerts | creates a command set named sslcerts |
          | ----------------------- | ------------------------------------ |

          > Output: Visible to everyone in the channel (in_channel).
          > User restrictions: Restricted to the app’s admins.
        title: /nc csm_create <command_set>
      - anchor: csm_delete
        body: >-
          Deletes a command set.


          The individual commands in the set are not deleted. To delete the
          command set and all the individual commands in the set, use
          [csm_uninstall]($csm_uninstall). If the command set was loaded from an
          external location, this command does not affect the external location,
          it just removes the command set from the current app.


          **Examples:**


          | /nc csm_delete sslcerts | deletes the command set named sslcerts |

          | ----------------------- | -------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc csm_delete <command_set>
      - anchor: csm_export
        body: >-
          Shows the [OpenCSI](/docs/commander/mattermost/opencsi) definition for
          a command set. The output can be copied to an external location along
          with the source code for the commands so it can be loaded with the
          [csm_install]($csm_install) command.


          **Examples:**


          | /nc csm_export sslcerts | shows the OpenCSI definition for the
          sslcerts command set |

          | ----------------------- |
          --------------------------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc csm_export <command_set>
      - anchor: csm_info
        body: >-
          For command sets loaded using [csm_install]($csm_install), this shows:
          the name, URL location, version number and description of the command
          set.


          Shows no information for command sets created with
          [csm_create]($csm_create).


          **Examples:**


          | /nc csm_info billing | shows information about the billing command
          set |

          | -------------------- |
          ----------------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc csm_info <command_set>
      - anchor: csm_install
        body: >-
          Installs a command set from an external location. The <command_set>
          can be one of 3 types:


          * The name of a master command set
            Master command set names are listed in the [master command set github repository](https://github.com/nimbella/command-sets).
          * A github location as github:<name>/<project>
            A file named "commands.yaml" must exist in the GitHub project location and must be in [OpenCSI](/docs/commander/mattermost/opencsi)  format. The URL to load for github locations is constructed as follows:
            ```
            https://raw.githubusercontent.com/ + <name>/<project> + /master/commands.yaml
            ```
          * A fully qualified HTTP or HTTPS URL of an
          [OpenCSI](/docs/commander/mattermost/opencsi) format YAML file.


          **Examples:**


          | /nc csm_install billing                         | installs the
          billing master command set                                    |

          | ----------------------------------------------- |
          --------------------------------------------------------------------------
          |

          | /nc csm_install github:user/repo                | installs a command
          set from github.com/user/repo/blob/master/commands.yaml |

          | /nc csm_install https://nimbella.com/myset.yaml | installs a command
          set from the given URL                                  |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc csm_install <command_set>
      - anchor: csm_list
        body: >-
          List all the command sets in the current app and the commands included
          in each set.


          **Examples:**


          | /nc csm_list | lists the command sets in the current app |

          | ------------ | ----------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc csm_list
      - anchor: csm_uninstall
        body: >-
          Deletes a command set and all the commands that are included in the
          set.


          If the command set was loaded from an external location, this command
          does not affect the external location, it just removes the commands
          and command set from the current app.


          **Examples:**


          | /nc csm_uninstall billing | deletes the command set named billing
          and all commands in the set |

          | ------------------------- |
          ----------------------------------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc csm_uninstall <command_set>
      - anchor: csm_update
        body: >-
          Upgrades a command set by reloading it from its external location. The
          update will overwrite the source code of the existing commands in the
          set. If any source code in the command set was changed, the changes
          will be overwritten by the update.


          Only command sets that were installed using the
          [csm_install]($csm_install) command can be updated.


          **Examples:**


          | /nc csm_update billing                         | reloads the billing
          master command set           |

          | ---------------------------------------------- |
          ------------------------------------------------ |

          | /nc csm_update github:user/repo                | reloads the command
          set from its github location |

          | /nc csm_update https://nimbella.com/myset.yaml | reloads the command
          set from its URL location    |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc csm_update <command_set>
      - anchor: group_create
        body: >-
          Creates a group of Mattermost users. <group> is the group's name and
          identifier. The group is associated with the current Mattermost app.


          **Example:**


          | /nc group_create ops | creates a group of users named ops |

          | -------------------- | ---------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc group_create <group>
      - anchor: group_delete
        body: >-
          Deletes a group of Mattermost users. This command does not delete
          users in Mattermost itself or modify it in any way, it just deletes
          the named group of users in the current app.


          **Example:**


          | /nc group_delete ops | deletes the user group named ops |

          | -------------------- | -------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc group_delete <group>
      - anchor: group_list
        body: |-
          Lists all the user groups in the current app.

          **Example:**

          | /nc group_list | lists the user groups |
          | -------------- | --------------------- |

          > Output: Visible to everyone in the channel (in_channel).
          > User restrictions: Restricted to the app’s admins.
        title: /nc group_list
      - anchor: group_members
        body: >-
          If just a group name is given and no additional parameters, shows all
          the members of the user group.


          With additional parameters that add or remove users (+/- <user>), adds
          or removes Mattermost users from the user group. <user> is a
          Mattermost username such as @tim. When adding or removing users, there
          is a space between the plus or minus and the Mattermost username.


          **Example:**


          | /nc group_members                          | lists the group's
          members                                         |

          | ------------------------------------------ |
          ----------------------------------------------------------------- |

          | /nc group_members ops + @tim + @sue - @joe | adds @tim, @sue and
          removes @joe to/from the user group named ops |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: '/nc group_members <group> [+ <user>] [- <user>] ...'
      - anchor: help
        body: >-
          Displays Nimbella Commander software version and help on basic
          Commander commands.


          **Examples:**


          | /nc help | displays version and help on basic Commander commands |

          | -------- | ----------------------------------------------------- |


          > Output: Only visible to you (ephemeral).

          > User restrictions: None.
        title: /nc help
      - anchor: register
        body: >-
          Registers your workspace with Commander.


          This command is run automatically when Commander is installed on
          Mattermost and needs to be run manually for Mattermost. The command
          adds an app with a name of nc. The user who runs this command or
          installs Commander on Mattermost becomes the admin for the nc app and
          their current app is set to nc.


          Examples:


          | /nc register | Registers your workspace and connects it to the
          Nimbella Commander app |

          | ------------ |
          ----------------------------------------------------------------------
          |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: The user who runs this command or installs
          Commander becomes the admin for the default app
        title: /nc register
      - anchor: secret_add
        body: >-
          Adds a secret parameter to the current app. Secret parameters must be
          created using the [secret_create]($secret_create) command, which
          provides a link to the Secret Creator interface, before adding them to
          the app with this command. All name, value secret parameters added to
          an app are stored with the value encrypted using AES-256 encryption.


          **Example:**


          | /nc secret_add gc_key Nb1\_908120980ASJH813\_ | adds a secret
          parameter "gc_key" to the current app |

          | --------------------------------------------- |
          --------------------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc secret_add <secret> <encrypted_value>
      - anchor: secret_create
        body: >-
          Shows a link to the Secret Creator web user-interface where secret
          parameters can be created. After creating secret parameters with the
          web interface, they should each be added to the app using the
          [secret_add]($secret_add) command. The Secret Creator outputs the
          [secret_add]($secret_add) commands needed to add the secrets to the
          app.


          Secrets are name, value pairs where the value is stored encrypted
          using AES-256 encryption. Secrets are commonly used for storing API
          keys and passwords. Each app has a set of secrets. Secret key names
          are not case-sensitive when it comes to /nc commands. When command
          source code associated with an app is executed, all of an app's secret
          parameters are decrypted and passed to the command source code as
          'params.secret.' input parameters. For example, a secret named 'gcKey'
          would be able to be accessed in code with:


          ```

          let gcKey = params.secrets.gcKey;

          ```


          **Example:**


          | /nc secret_create | shows a link to the Secret Creator web
          user-interface |

          | ----------------- |
          ----------------------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc secret_create
      - anchor: secret_delete
        body: >-
          Deletes a secret parameter from the current app.


          **Example:**


          | /nc secret_delete gc_key | deletes secret parameter "gc_key" from
          the current app |

          | ------------------------ |
          ------------------------------------------------------ |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc secret_delete <secret>
      - anchor: secret_list
        body: >-
          Lists the secret parameters in the current app. To reduce the size of
          the output, only the first 10 and last 10 characters of each encrypted
          value is shown.


          **Example:**


          | /nc secret_list | lists the secret parameters for the current app |

          | --------------- | ----------------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: None.
        title: /nc secret_list
      - anchor: task_channel
        body: >-
          Shows or sets the output Mattermost channel for a task. With no
          parameters, the output channel for the task is shown. When setting an
          output channel, the channel must have been first added to the app
          using the [channel_add]($channel_add) command.


          **Examples:**


          | /nc task_channel my_daily_task          | displays the current
          output channel for my_daily_task |

          | --------------------------------------- |
          ----------------------------------------------------- |

          | /nc task_channel my_daily_task #general | sets #general as the
          output channel for my_daily_task |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins or task’s creator.
        title: '/nc task_channel <task> [<channel>]'
      - anchor: task_create
        body: >-
          Creates a task that runs a command, including command parameters, and
          outputs to a Mattermost channel. <task> is the task's name and
          identifier. To set a schedule or rate for the task, use the
          [task_schedule]($task_schedule) or [task_rate]($task_rate) command. A
          task does not automatically start running once it is created and a
          schedule or rate has been set for it. The [task_start]($task_start)
          command is used to start a task running.


          The Mattermost output channel must have been first added to the app
          using the [channel_add]($channel_add) command.


          **Example:**


          | /nc task_create my_task #general stock_quote AAPL | creates a task
          my_task that outputs to the #general channel and that runs the command
          "stock_quote AAPL" |

          | ------------------------------------------------- |
          --------------------------------------------------------------------------------------------------------
          |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Only users with authority to run the command can
          create a task for that command. The task is run with the credentials
          of the Mattermost user creating the task.
        title: /nc task_create <task> <channel> <command_with_params>
      - anchor: task_delete
        body: >-
          Deletes a task. A running task must be stopped with
          [task_stop]($task_stop) before it can be deleted.


          **Examples:**


          | /nc task_delete my_task | deletes the task my_task |

          | ----------------------- | ------------------------ |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins or task’s creator.
        title: /nc task_delete <task>
      - anchor: task_info
        body: >-
          Shows information about a task including: name, creator, schedule or
          rate and status (stopped or running). If the task is running or was
          stopped, the time it started running or when it was stopped is also
          shown.


          **Example:**


          | /nc task_info my_task | shows information about task my_task |

          | --------------------- | ------------------------------------ |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins or task’s creator.
        title: /nc task_info <task>
      - anchor: task_list
        body: >-
          Lists the tasks in the current app. The following information about
          each task is shown: name, creator, schedule or rate and status
          (stopped or running). If the task is running or was stopped, the time
          it started running or when it was stopped is also shown.


          **Examples:**


          | /nc task_list | lists the tasks in the current app |

          | ------------- | ---------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins or task’s creator.
        title: /nc task_list
      - anchor: task_rate
        body: >-
          Shows or sets the rate at which a task should run. A rate is a value
          such as: every 15 minutes, every 2 hours, or every day.


          With just a task name and no additional parameters, the current rate
          for the task is shown.


          A rate is specified as a <value> and <unit> where <value> is a number
          and <unit> is one of: minute, minutes, hour, hours, day or days.


          Some example rates:


          * 10 minutes

          * 1 hour

          * 2 days


          If a task is running, it must be stopped with [task_stop]($task_stop)
          before the rate can be changed. If a task has a schedule set, setting
          its rate will remove its schedule. Setting a task's rate does not
          automatically start the task running, use the
          [task_start]($task_start) command to start the task running.


          **Examples:**


          | /nc task_rate my_task            | shows the current rate for task
          my_task   |

          | -------------------------------- |
          ----------------------------------------- |

          | /nc task_rate my_task 20 minutes | sets task my_task to run every 20
          minutes |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins or task’s creator.
        title: '/nc task_rate <task> [<value> <unit>]'
      - anchor: task_schedule
        body: >-
          Shows or sets the schedule at which a task should run. A schedule is a
          value such as: "at 1pm on the 10th of the month" or "every day at 3:30
          and 6:30".


          All scheduled tasks date and times are UTC time zone date and times.
          You can use the [Time and Date
          Converter](https://www.timeanddate.com/worldclock/converter.html) to
          convert between local and UTC time. On that page, enter your location
          for your time zone and location "UTC" to specify the UTC time zone.


          With just a task name and no additional parameters, the current
          schedule for the task is shown.


          When setting a schedule, <SCHEDULE> is specified in a simplified CRON
          format.


          A schedule consists of 6 fields within quotes. Each field must be one
          of the following:


          * A number specifying a value for the field

          * A comma separated set of numbers, specifying a set of values for a
          field

          * An asterisk (*), meaning all values in the field


          The 6 parameters that define a schedule are:


          1. <mi> - Minute (0-59)

          2. <hr> - Hour (0-23)

          3. <dm> - Day of the month (1-31)

          4. <my> - Month of the year (1-12)

          5. <dw> - Day of the week (1-7, 1 for Monday)

          6. <yr> - Year (1970 - 2199)


          The following diagram also explains the 6 fields:


          CMS-IMAGECLASS IMAGE=/images/uploads/task-schedule.png INDENT=0
          CLASS=border-0 ALT=task schedule


          Some example schedules:


          | 10 3 1 1 * 2020     | Jan 1st, 2020 at 3:10 UTC
          time                  |

          | ------------------- |
          ----------------------------------------------- |

          | 10 \* \* \* \* *    | Every hour at 10 minutes past the hour UTC
          time |

          | 0 10 \* \* \* \*    | Every day at 10:00 UTC
          time                     |

          | 0 10,11 \* \* \* \* | Every day at 10:00 and 11:00 UTC
          time           |


          You cannot specify both a day of the month and a day of the week. If
          you specify one, the other must be an asterisk (*).


          If a task is running, it must be stopped with [task_stop]($task_stop)
          before the schedule can be changed. If a task has a rate set, setting
          its schedule will remove its rate. Setting a task's schedule does not
          automatically start the task running, use the
          [task_start]($task_start) command to start the task running.


          **Examples:**


          | /nc task_schedule my_task                  | shows the current
          schedule for task my_task          |

          | ------------------------------------------ |
          ---------------------------------------------------- |

          | /nc task_schedule my_task 0 11 \* \* \* \* | sets task my_task to
          run every day at 11:00 UTC time |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins or task’s creator.
        title: '/nc task_schedule <task> [<mi> <hr> <dm> <my> <dw> <yr>]'
      - anchor: task_start
        body: >-
          Starts a task running. The task must have been created with a
          [task_create]($task_create) command and either a schedule or rate must
          have been set with a [task_schedule]($task_schedule) or
          [task_rate]($task_rate) command before it can be started.


          **Example:**


          | /nc task_start my_task | starts task my_task running |

          | ---------------------- | --------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins or task’s creator.
        title: /nc task_start <task>
      - anchor: task_stop
        body: |-
          Stops a running task.

          **Example:**

          | /nc task_stop my_task | stops task my_task |
          | --------------------- | ------------------ |

          > Output: Visible to everyone in the channel (in_channel).
          > User restrictions: Restricted to the app’s admins or task’s creator.
        title: /nc task_stop <task>
      - anchor: trigger_channel
        body: >-
          Shows or sets the output Mattermost channel for a trigger. With no
          parameters, the output channel for the trigger is shown. When setting
          an output channel, the channel must have been first added to the app
          using the [channel_add]($channel_add) command.


          **Examples:**


          | /nc trigger_channel git_checkin          | displays the current
          output channel for "git_checkin" |

          | ---------------------------------------- |
          ----------------------------------------------------- |

          | /nc trigger_channel git_checkin #general | sets #general as the
          output channel for "git_checkin" |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: '/nc trigger_channel <trigger> [<channel>]'
      - anchor: trigger_create
        body: >-
          Creates a trigger (incoming webhook) that executes the given command,
          including command parameters, and sends output to a Mattermost
          channel. <trigger> is the trigger's name and identifier.


          Displays the incoming webhook URL that an external webhook should call
          to execute the command.


          It is up to the command source code to authenticate the trigger
          caller.


          The Mattermost output channel must have been first added to the app
          using the [channel_add]($channel_add) command.


          **Example:**


          | /nc trigger_create git_checkin #general checkin 100 | creates a
          trigger "git_checkin" that outputs to the #general channel and that
          runs the command "checkin 100" |

          | --------------------------------------------------- |
          ------------------------------------------------------------------------------------------------------------
          |


          > Output: Only visible to you (ephemeral).

          > User restrictions: Restricted to the app’s admins.
        title: /nc trigger_create <trigger> <channel> <command_with_params>
      - anchor: trigger_delete
        body: |-
          Deletes a trigger.

          **Examples:**

          | /nc trigger_delete git_checkin | deletes the trigger "git_checkin" |
          | ------------------------------ | --------------------------------- |

          > Output: Visible to everyone in the channel (in_channel).
          > User restrictions: Restricted to the app’s admins.
        title: /nc trigger_delete <trigger>
      - anchor: trigger_disable
        body: >-
          Disables a trigger. When a trigger is disabled, calls to the trigger's
          incoming webhook URL have no effect.


          **Example:**


          | /nc trigger_disable git_checkin | disables the trigger "git_checkin"
          |

          | ------------------------------- | ----------------------------------
          |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc trigger_disable <trigger>
      - anchor: trigger_enable
        body: |-
          Enables a trigger.

          **Example:**

          | /nc trigger_enable git_checkin | enables the trigger "git_checkin" |
          | ------------------------------ | --------------------------------- |

          > Output: Visible to everyone in the channel (in_channel).
          > User restrictions: Restricted to the app’s admins.
        title: /nc trigger_enable <trigger>
      - anchor: trigger_info
        body: >-
          Shows information about a trigger including: name, command, incoming
          webhook URL and enabled/disabled status.


          **Examples:**


          | /nc trigger_info git_checkin | shows information about trigger
          "git_checkin" |

          | ---------------------------- |
          --------------------------------------------- |


          > Output: Only visible to you (ephemeral).

          > User restrictions: Restricted to the app’s admins.
        title: /nc trigger_info <trigger>
      - anchor: trigger_list
        body: >-
          Lists the triggers in the current app. The following information about
          each trigger is shown: name, command and enabled/disabled status.


          **Examples:**


          | /nc trigger_list | lists all the triggers in the current app |

          | ---------------- | ----------------------------------------- |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: /nc trigger_list
      - anchor: user_log
        body: >-
          Shows 10 user command log lines for the Mattermost user and current
          app. <user> is a Mattermost username such as @phil. The user command
          log includes a log of all /nc and app commands run by the user. The
          log includes the command name, parameters and the time the command was
          run in UTC time format.


          Without any parameters, the most recent 10 numbered log lines are
          shown. An optional "-from" parameter can be specified along with a log
          line number to show 10 log lines starting at the log line number.


          **Examples:**


          | /nc user_log @phil          | shows the most recent 10 command log
          lines for user @phil    |

          | --------------------------- |
          ------------------------------------------------------------ |

          | /nc user_log @phil -from 90 | shows 10 log lines starting at line
          number 90 for user @phil |


          > Output: Visible to everyone in the channel (in_channel).

          > User restrictions: Restricted to the app’s admins.
        title: '/nc user_log <user> [-from <line_number>]'
    title: Command Reference
meta:
  description: >-
    Shows the version of Commander installed, a link to license information and
    a link to documentation.
  title: Reference
---

