---
title: Reference
status: Published
index: '3'
anchor-subject:
  - anchor: Commands
    anchor-item:
      - anchor: ''
        body: >
          Shows the version of Commander installed, a link to license
          information and a link to documentation.

          > User restrictions: None.
        title: /nc
      - anchor: account info
        body: >-
          Shows information about the Commander account associated with the
          current workspace including the plan the account is on (free or paid
          tier) and any account limits.


          **Examples:**


          | account info | displays information about your Commander account |

          | ---------------- | -------------------------------------------------
          |


          > User restrictions: None.
        title: account info
      - anchor: account upgrade
        body: >-
          Shows a link that allows you to upgrade your Commander account to a
          paid plan or higher tier.


          **Examples:**


          | account upgrade | shows a link to the account upgrade web page |

          | ------------------- | -------------------------------------------- |


          > User restrictions: None.
        title: account upgrade
      - anchor: activation log
        body: >-
          Without an activation_id, this command outputs the log from the
          underlying servleress platform of the most recent command run. It can
          be useful when debugging because console.log() messages will appear in
          the activation log as well as more detailed response output
          information. An activation_id may be passed to look at the information
          corresponding to a specific function activation. The log commands such
          as command_log show the activation_id of the function that was
          executed as a result of running the command. The "strip" option
          removes time from the output.


          **Examples:**


          | activation log                      | shows information about the
          most recent activation                      |

          | --------------------------------------- |
          -----------------------------------------------------------------------
          |

          | activation log -strip               | shows information about the
          most recent activation without time details |

          | activation log bf8af8ecec98a8d8bc9a | shows information about a
          specific activation                           |


          > User restrictions: Restricted to the app’s admins.
        title: 'activation log [<activation_id>] [-strip]'
      - anchor: app admins
        body: >-
          Without any parameters, shows the list of Teams users who are
          administrative users.


          With parameters, adds or removes Microsoft Teams users as app admins.
          <user> is a Teams username such as tim. When adding or removing users,
          there is a space between the plus or minus and the Teams username.


          A number of Commander commands can only be run by users who are an
          app's admin. By default the user who created the app is the admin for
          the app. Groups can't be added as admins, only individual users can be
          added as admins.


          **Examples:**


          | app admins                      | lists the app's
          admins                                        |

          | ----------------------------------- |
          ------------------------------------------------------------- |

          | app admins + tim + sue - joe | adds tim, sue and removes joe as
          admins |


          > User restrictions: Restricted to the app's admin users.
        title: 'app admins [+ <user>] [- <user>] ...'
      - anchor: app log
        body: >-
          Shows 10 app command log lines. The app command log includes a log of
          all and app commands run, showing the user who ran the command and the
          time the command was run in UTC time format.


          Without any parameters, the most recent 10 numbered log lines are
          shown. An optional "-from" parameter can be specified along with a log
          line number to show 10 log lines starting at the log line number.


          **Examples:**


          | app log          | shows the most recent 10 app command log
          lines        |

          | -------------------- |
          ----------------------------------------------------- |

          | app log -from 90 | shows 10 app log lines starting at log line
          number 90 |


          > User restrictions: Restricted to the app’s admins.
        title: 'app log [-from <line_number>]'
      - anchor: app workbench
        body: >-
          Shows information allowing use of the Nimbella Workbench. The Nimbella
          Workbench allows development directly on the Nimbella Cloud. Free-tier
          Commander accounts do not have workbench access.


          You can use the [account info]($account-info) command to view your
          Commander account and the [account upgrade]($account-upgrade) command
          to upgrade your account to a higher tier.


          **Examples:**


          | app workbench | displays Nimbella Workbench account information and
          a link to get more information |

          | --------------------- |
          ----------------------------------------------------------------------------------
          |


          > User restrictions: Restricted to the app's admin users.
        title: app workbench
      - anchor: command code
        body: >-
          Shows a link to the command's source code editor.


          **Example:**


          | command code add_host | shows a link to the source code editor for
          command add_host |

          | ------------------------- |
          ----------------------------------------------------------- |


          > User restrictions: Restricted to the app’s admins or command's
          coders.
        title: command code <command>
      - anchor: command coders
        body: >-
          Without any parameters, shows the list of Teams users and user groups
          who are allowed to view and edit the source code for the command.


          With parameters, adds or removes Teams users or groups of users as
          coders who can view or edit the source code for the command. <user> is
          a Teams username such as tim. <group> is a group name created with
          [group create]($group-create). When adding or removing users or
          groups, there is a space between the plus or minus and the Teams
          username or group name.


          App admins users can view and edit source code for any command in the
          app, they do not need to be added as coders. 


          **Example:**


          | command coders add_host                           | lists the coders
          for the add_host
          command                                                |

          | ----------------------------------------------------- |
          ----------------------------------------------------------------------------------------
          |

          | command coders add_host + tim + dev_group - joe | adds user tim,
          group dev_group and removes user joe as coders for the add_host
          command |


          > User restrictions: Restricted to the app's admin users.
        title: >-
          command coders <command> [+ <user>] [- <user>] [+ <group>] [- <group>]
          ...
      - anchor: command copy
        body: >-
          Copies a command to a new command name. The copy includes a copy of
          the source for the command.


          **Examples:**


          | command copy print newprint | creates a newprint command that is a
          copy of the print command |

          | ------------------------------- |
          -------------------------------------------------------------- |


          > User restrictions: Restricted to the app’s admins.
        title: command copy <command> <new_command>
      - anchor: command create
        body: >-
          Creates a command. Shows a link to command's source code editor.


          A newly created command can only be run by the app's admin users. To
          allow other Teams users to run the command, use the [command
          runners]($command-runners) command to allow individual groups or users
          to run the command. If you want anyone to be able to run the command,
          add the special group "anyone" with [command
          runners]($command-runners).


          Command parameters are specified within < > brackets. For example,
          this creates a quota command that takes a single "salesperson"
          parameter:


          > ##### command create quota <salesperson>


          If the user ran the command using:


          > ##### run quota phil


          Then the source code for the quota command could access the
          <salesperson> parameter as the 'params.salesperson' input parameter.


          ```

          if (params.salesperson == "phil") ...

          ```


          Multiple parameters can be specified and a single optional command
          parameter may appear at the end of the parameter list in \[< >]
          brackets:


          > ##### command create quota <org> <salesperson> \[<value>]


          The above command could be run in the following ways:


          > ##### run quota joe

          >

          > ##### run quota joe 5


          Commands also support options. Options appear in \[ ] brackets and are
          always prefixed with a – dash. A command definition can have multiple
          options. When a command is run that includes options, the options may
          be specified in any order but they must appear at the end of the
          command.


          An option can be a name alone or a name value pair:


          > ##### command create quota <salesperson> \[-detail] \[-retry
          <retry_count>]


          If created in that manner, the quota command could be run in any of
          the following ways:


          > ##### run quota joe

          >

          > ##### run quota joe -detail

          >

          > ##### run quota joe 5 -retry 5

          >

          > ##### run quota joe -retry 5 -detail


          A variable number of arguments is supported by adding "..." to the end
          of the parameter list:


          > ##### command create quota <salesperson> ...


          When using "...", a user can enter any text at the end of the command.
          The extra text entered does not appear as input parameters. To parse
          out variable parameters, source code should parse the commandText
          string parameter. It includes the command just as it was entered by
          the user:


          ```

          let allParams = split(commandText, " "); ...

          ```


          An example with a complex definition:


          > ##### command create a <b> <c> \[<d>] \[-g] \[-h] \[-i <j>] ...


          **Examples:**


          | command create add_host               | creates a command add_host
          that takes no parameters                   |

          | ----------------------------------------- |
          ---------------------------------------------------------------------
          |

          | command create add_host ...           | creates a command add_host
          that takes a variable number of parameters |

          | command create add_host <host> <addr> | creates a command add_host
          that takes two parameters                  |


          > User restrictions: Restricted to the app’s admins.
        title: 'command create <command> [<parameters>] ...'
      - anchor: command delete
        body: >-
          Deletes a command.


          **Example:**


          | command delete add_host | deletes the add_host command |

          | --------------------------- |
          ------------------------------------------------- |

          > User restrictions: Restricted to the app’s admins.
        title: command delete <command>
      - anchor: command desc
        body: >-
          Shows or sets a command's description.


          **Examples:**


          | command desc add_host                       | shows the description
          for command add_host |

          | ----------------------------------------------- |
          ------------------------------------------ |

          | command desc add_host "Adds a DNS hostname" | sets the description
          for command add_host  |


          > User restrictions: No restrictions for showing the description.
          Setting the description is restricted to the app’s admins or command's
          coders.
        title: 'command desc <command> [<description>]'
      - anchor: command info
        body: >-
          Shows information about a command including: name, parameters,
          description, when it was created in UTC time, the user who created it,
          when the source code was last modified and which user last modified
          the command's source code.


          **Example:**


          | command info add_host | shows information about the command add_host
          |

          | ------------------------- |
          -------------------------------------------- |


          > User restrictions: Restricted to the app’s admins or command's
          coders.
        title: command info <command>
      - anchor: command list
        body: >-
          List all the app's commands. If a substring <substring_match> is
          given, only the commands with names or commands containing the
          substring are shown.


          **Examples:**


          | command list      | lists the app's
          commands                              |

          | --------------------- |
          ----------------------------------------------------- |

          | command list host | lists the app's commands that contain the word
          "host" |


          > User restrictions: None.
        title: 'command list [<substring_match>]'
      - anchor: command log
        body: >-
          Shows 10 log lines for a command. As commands are run, they wrote log
          lines to the command log. The log includes the command parameters, the
          user who ran the command, the time the command was run in UTC time
          format, the execution time and HTTP response code.


          Without any parameters, the most recent 10 numbered log lines are
          shown. An optional "-from" parameter can be specified along with a log
          line number to show 10 log lines starting at the log line number.


          **Examples:**


          | command log add_host          | shows the most recent 10 log lines
          for the add_host command            |

          | --------------------------------- |
          ----------------------------------------------------------------------
          |

          | command log add_host -from 90 | shows 10 log lines starting at line
          number 90 for the add_host command |


          > User restrictions: Restricted to the app’s admins or command’s
          coders.
        title: 'command log <command> [-from <index>]'
      - anchor: command params
        body: >-
          Shows or sets a command's input parameters.


          See [command create]($command-create) for how <parameters> are
          specified.


          Newly added parameters can be accessed in command source code using
          "params.<parameter_name>".


          **Examples:**


          | command params add_host                      | shows the parameters
          for command add_host         |

          | ------------------------------------------------ |
          ------------------------------------------------- |

          | command params add_host <host> <type> <addr> | changes the command
          add_host to take 3 parameters |


          > User restrictions: Restricted to the app’s admins or command’s
          coders.
        title: 'command params <command> [<parameters>] ...'
      - anchor: command runners
        body: >-
          Without any parameters, shows the list of Teams users and user groups
          who are allowed to run the command.


          With parameters, adds or removes Teams users or groups of users as
          runners who can run the command. <user> is a Team's username. <group>
          is a group name created with [group create]($group-create).


          There is a special group called "anyone" that always exists and that
          you can use to allow the command to be run by anyone.


          When adding or removing users or groups, there is a space between the
          plus or minus and the username or group name.


          The special value "anyone" can be used to allow anyone to run the
          command.


          App admins users can run any command in the app, they do not need to
          be added as a runner. Coder users for a command can run the command,
          they do not need to be added as a runner. 


          **Examples:**


          | command runners add_host                           | lists the
          runners for the add_host
          command                                                |

          | ------------------------------------------------------ |
          -----------------------------------------------------------------------------------------
          |

          | command runners add_host + anyone                  | allows anyone
          to run the command
          add_host                                                 |

          | command runners add_host + tim + dev_group - joe | adds user tim,
          group dev_group and removes user joe as runners for the add_host
          command |


          > User restrictions: Restricted to the app's admin users.
        title: >-
          command runners <command> [+ <user>] [- <user>] [+ <group> 1] [-
          <group> N] ...
      - anchor: command webhook
        body: >-
          Shows or sets a command's outgoing webhook URL. Setting a webhook URL
          for a command will cause the system to call out to the webhook URL
          instead of running the source code associated with the command.


          The special URL "clear" can be used to clear an existing webhook URL.


          **Examples:**


          | command webhook add_host                              | shows the
          custom webhook URL for command add_host |

          | --------------------------------------------------------- |
          ------------------------------------------------- |

          | command webhook add_host clear                        | clears any
          webhook URL for the command add_host   |

          | command webhook add_host https://nmb.com/d/addhost.js | sets the
          webhook URL for command add_host         |


          > User restrictions: Restricted to the app’s admins or command’s
          coders.
        title: 'command webhook <command> [<webhook_URL>]'
      - anchor: csm commands
        body: >-
          Without any parameters, shows the commands included in the command
          set.


          With parameters, adds or removes commands from the command set. When
          adding or removing commands, there is a space between the plus or
          minus and the command name.


          Individual commands cannot be included in multiple command sets.


          **Examples:**


          | csm commands sslcerts                            | lists the
          commands in the sslcerts command set                                |

          | ---------------------------------------------------- |
          -----------------------------------------------------------------------------
          |

          | csm commands sslcerts + ssl_expiry - host_update | adds command
          ssl_expiry and removes host_update from the sslcerts command set |

          > User restrictions: Restricted to the app’s admins.
        title: 'csm commands <command_set> [+ <command>] [- <command>] ...'
      - anchor: csm create
        body: |-
          Creates a command set with the given name.

          **Example:**

          | csm create sslcerts | creates a command set named sslcerts |
          | ----------------------- | ------------------------------------ |

          > User restrictions: Restricted to the app’s admins.
        title: csm create <command_set>
      - anchor: csm delete
        body: >-
          Deletes a command set.


          The individual commands in the set are not deleted. To delete the
          command set and all the individual commands in the set, use [csm
          uninstall]($csm-uninstall). If the command set was loaded from an
          external location, this command does not affect the external location,
          it just removes the command set.


          **Examples:**


          | csm delete sslcerts | deletes the command set named sslcerts |

          | ----------------------- | -------------------------------------- |

          > User restrictions: Restricted to the app’s admins.
        title: csm delete <command_set>
      - anchor: csm export
        body: >-
          Shows the [OpenCSI](/docs/commander/microsoft-teams/opencsi)
          definition for a command set. The output can be copied to an external
          location along with the source code for the commands so it can be
          loaded with the [csm install]($csm-install) command.


          **Examples:**


          | csm export sslcerts | shows the OpenCSI definition for the sslcerts
          command set |

          | ----------------------- |
          --------------------------------------------------------- |

          > User restrictions: Restricted to the app’s admins.
        title: csm export <command_set>
      - anchor: csm info
        body: >-
          For command sets loaded using [csm install]($csm-install), this shows:
          the name, URL location, version number and description of the command
          set.


          Shows no information for command sets created with [csm
          create]($csm-create).


          **Examples:**


          | csm info billing | shows information about the billing command set |

          | -------------------- |
          ----------------------------------------------- |


          > User restrictions: Restricted to the app’s admins.
        title: csm info <command_set>
      - anchor: csm install
        body: >-
          Installs a command set from an external location. The <command_set>
          can be one of 3 types:


          * The name of a master command set
            Master command set names are listed in the [master command set github repository](https://github.com/nimbella/command-sets).
          * A github location as github:<name>/<project>
            A file named "commands.yaml" must exist in the GitHub project location and must be in [OpenCSI](/docs/commander/microsoft-teams/opencsi)  format. The URL to load for github locations is constructed as follows:
            ```
            https://raw.githubusercontent.com/ + <name>/<project> + /master/commands.yaml
            ```
          * A fully qualified HTTP or HTTPS URL of an
          [OpenCSI](/docs/commander/microsoft-teams/opencsi) format YAML file.


          **Examples:**


          | csm install billing                         | installs the billing
          master command set                                    |

          | ----------------------------------------------- |
          --------------------------------------------------------------------------
          |

          | csm install github:user/repo                | installs a command set
          from github.com/user/repo/blob/master/commands.yaml |

          | csm install https://nimbella.com/myset.yaml | installs a command set
          from the given URL                                  |

          > User restrictions: Restricted to the app’s admins.
        title: csm install <command_set>
      - anchor: csm list
        body: |-
          List all the command sets and the commands included in each set.

          **Examples:**

          | csm list | lists the command sets |
          | ------------ | ----------------------------------------- |

          > User restrictions: Restricted to the app’s admins.
        title: csm list
      - anchor: csm uninstall
        body: >-
          Deletes a command set and all the commands that are included in the
          set.


          If the command set was loaded from an external location, this command
          does not affect the external location, it just removes the commands
          and command set.


          **Examples:**


          | csm uninstall billing | deletes the command set named billing and
          all commands in the set |

          | ------------------------- |
          ----------------------------------------------------------------- |


          > User restrictions: Restricted to the app’s admins.
        title: csm uninstall <command_set>
      - anchor: csm update
        body: >-
          Upgrades a command set by reloading it from its external location. The
          update will overwrite the source code of the existing commands in the
          set. If any source code in the command set was changed, the changes
          will be overwritten by the update.


          Only command sets that were installed using the [csm
          install]($csm-install) command can be updated.


          **Examples:**


          | csm update billing                         | reloads the billing
          master command set           |

          | ---------------------------------------------- |
          ------------------------------------------------ |

          | csm update github:user/repo                | reloads the command set
          from its github location |

          | csm update https://nimbella.com/myset.yaml | reloads the command set
          from its URL location    |

          > User restrictions: Restricted to the app’s admins.
        title: csm update <command_set>
      - anchor: group create
        body: >-
          Creates a group of Microsoft Teams users. <group> is the group's name
          and identifier.

          **Example:**


          | group create ops | creates a group of users named ops |

          | -------------------- | ---------------------------------- |

          > User restrictions: Restricted to the app’s admins.
        title: group create <group>
      - anchor: group delete
        body: >-
          Deletes a group of users. This command does not delete users in
          Microsoft Teams itself or modify Microsoft Teams in any way, it just
          deletes the named group of users in Commander.


          **Example:**


          | group delete ops | deletes the user group named ops |

          | -------------------- | -------------------------------- |


          > User restrictions: Restricted to the app’s admins.
        title: group delete <group>
      - anchor: group list
        body: |-
          Lists all the user groups.

          **Example:**

          | group list | lists the user groups |
          | -------------- | --------------------- |

          > User restrictions: Restricted to the app’s admins.
        title: group list
      - anchor: group members
        body: >-
          If just a group name is given and no additional parameters, shows all
          the members of the user group.


          With additional parameters that add or remove users (+/- <user>), adds
          or removes Microsoft Teams users from the user group. <user> is a
          Teams username. When adding or removing users, there is a space
          between the plus or minus and the Teams username.


          **Example:**


          | group members                          | lists the group's
          members                                         |

          | ------------------------------------------ |
          ----------------------------------------------------------------- |

          | group members ops + tim + sue - joe | adds tim, sue and removes joe
          to/from the user group named ops |

          > User restrictions: Restricted to the app’s admins.
        title: 'group members <group> [+ <user>] [- <user>] ...'
      - anchor: help
        body: >-
          Displays Nimbella Commander software version and help on basic
          Commander commands.


          **Examples:**


          | help | displays version and help on basic Commander commands |

          | -------- | ----------------------------------------------------- |

          > User restrictions: None.
        title: help
      - anchor: register
        body: >-
          Registers your workspace with Commander.


          The command adds an app with a name of nc. The user who runs this
          command becomes the admin for the nc app and their current app is set
          to nc.


          Examples:


          |register|Registers your workspace and connects it to the Nimbella
          Commander app|

          | --------------------------- |
          ------------------------------------------------------------ |

          > User restrictions: The user who runs this command or installs
          Commander becomes the admin for the default app
        title: register
      - anchor: secret add
        body: >-
          Adds a secret parameter. Secret parameters must be created using the
          [secret create]($secret-create) command, which provides a link to the
          Secret Creator interface, before adding them to the app with this
          command. All name, value secret parameters added to an app are stored
          with the value encrypted using AES-256 encryption.

          When pasted from the secret create, the secret create command with
          encrypted keys will be copied. The global flag can only be used by
          adminsitrator users and is used to a a set a global app secret.


          **Example:**


          | secret add gc_key Nb1\_908120980ASJH813\_ | adds a secret parameter
          "gc_key" |

          | ----------------------------------------- |
          -------------------------------- |


          > User restrictions: none.
        title: 'secret add <secret> <encrypted_value> [-global]'
      - anchor: secret create
        body: >-
          Shows a link to the Secret Creator web user-interface where secret
          parameters can be created. After creating secret parameters with the
          web interface, they should each be added to the app using the [secret
          add]($secret-add) command. The Secret Creator outputs the [secret
          add]($secret-add) commands needed to add the secrets to the app.


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


          | secret create | shows a link to the Secret Creator web
          user-interface |

          | ------------- |
          ----------------------------------------------------- |


          > User restrictions: None.
        title: secret create
      - anchor: secret delete
        body: >-
          Deletes a secret parameter.


          **Example:**


          | secret delete gc_key | deletes secret parameter "gc_key" from the
          current app |

          | -------------------- |
          ------------------------------------------------------ |


          > User restrictions: None
        title: secret delete <secret>
      - anchor: secret list
        body: >-
          Lists the current user’s secrets and all global secrets in the current
          app. To reduce the size of the output, only the first 10 and last 10
          characters of each encrypted value is shown.


          **Example:**


          | secret list | lists the secret parameters |

          | ----------- | --------------------------- |


          > User restrictions: None.
        title: secret list
      - anchor: user log
        body: >-
          Shows 10 user command log lines for the Teams user. <user> is a
          Microsoft Teams username such as phil. The user command log includes a
          log of all Commander and app commands run by the user. The log
          includes the command name, parameters and the time the command was run
          in UTC time format.


          Without any parameters, the most recent 10 numbered log lines are
          shown. An optional "-from" parameter can be specified along with a log
          line number to show 10 log lines starting at the log line number.


          **Examples:**


          | user log phil          | shows the most recent 10 command log lines
          for user phil    |

          | --------------------------- |
          ------------------------------------------------------------ |

          | user log phil -from 90 | shows 10 log lines starting at line number
          90 for user phil |


          > User restrictions: Restricted to the app’s admins.
        title: 'user log <user> [-from <line_number>]'
    title: Command Reference
meta:
  description: >-
    Shows the version of Commander installed, a link to license information and
    a link to documentation.
  title: Reference
---

