# everforest-pecan-blairmod

This is a modified version of [talwat's Everforest theme](https://github.com/talwat/dotfiles) for [pecan](https://github.com/zzzeyez/pecan).

## Installation

```zsh
cd ~/00blair/gitrepos/
git clone -v https://github.com/blairw/everforest-pecan-blairmod
ln -s ~/00blair/gitrepos/everforest-pecan-blairmod/pecan ~/Library/Application\ Support/Übersicht/widgets/pecan
```

## Features

- Actual colours for CPU load, based on [icewind's Everforest theme for iTerm 2](https://github.com/icewind/everforest.iterm2)
- Date hackily moved to the right-hand side, merged with clock, to avoid the M1X MacBook Pro notch
- Two versions:
	- `pecan-MBA2017` - compact version
	- `pecan-MBP2021` - appropriate padding, for M1X MacBook Pro notch
	- Simply symlink the needed one as `pecan.css`


## Network statistics

```zsh
brew install ifstat

# If running Apple Silicon
sudo ln -s /opt/homebrew/bin/ifstat /usr/local/bin/ifstat
```


## Screenshots

Left side:

![Screenshot 1](docs/screenshot1.png)

Right side:

![Screenshot 2](docs/screenshot2.png)
