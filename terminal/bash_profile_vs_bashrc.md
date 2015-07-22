###.bash_profile vs .bashrc



```bash(1)``` can be started in interactive mode or non-interactive mode. It can also act as a login shell or a non-login shell.

```bash(1)``` is started in interactive mode by your terminal emulator.

---


```.bashrc``` is sourced on every start in interactive mode when bash(1) does not act as a login shell.

```.bash_profile``` is only sourced when bash(1) is started as an interactive login shell, or as a non-interactive shell with the --login option.

This means that ```.bash_profile``` is great for commands that should run only once and ```.bashrc``` for commands that should run every time you start a new shell.