# Auto Showcase Guide

This guide explains how to use the automatic showcase feature for recording demo videos.

## Quick Start

1. **Open the website** in your browser
2. **Open browser console** (Press F12, then click "Console" tab)
3. **Run the command**:
   ```javascript
   startAutoShowcase()
   ```
4. **Start recording** your screen
5. The script will automatically cycle through all model cards

## Commands

### Start the Showcase
```javascript
startAutoShowcase()
```
Starts automatically cycling through all model cards.

### Stop the Showcase
```javascript
stopAutoShowcase()
```
Completely stops the showcase and resets to the beginning.

### Pause the Showcase
```javascript
pauseAutoShowcase()
```
Temporarily pauses the showcase.

### Resume the Showcase
```javascript
resumeAutoShowcase()
```
Continues from where it was paused.

## Custom Timing

You can customize how long each card is displayed:

```javascript
// Show each card for 5 seconds with 500ms pause between
startAutoShowcase({
    cardDisplayTime: 5000,      // 5 seconds per card
    pauseBetweenCards: 500      // 0.5 second pause
})
```

### Available Options

| Option | Default | Description |
|--------|---------|-------------|
| `cardDisplayTime` | 4000ms | How long to display each card |
| `scrollDelay` | 500ms | Delay before showing overlay after scroll |
| `pauseBetweenCards` | 1000ms | Pause between transitioning to next card |

## Recording Tips

1. **Prepare Your Screen**
   - Set browser to full screen (F11)
   - Hide bookmarks bar
   - Close unnecessary tabs
   - Set zoom to 100%

2. **Best Recording Settings**
   ```javascript
   startAutoShowcase({
       cardDisplayTime: 5000,    // 5 seconds per card
       pauseBetweenCards: 1500   // 1.5 second pause
   })
   ```

3. **Recording Workflow**
   - Open the website
   - Open console and prepare the command
   - Start your screen recorder
   - Run `startAutoShowcase()`
   - Let it cycle through all cards
   - Stop recording
   - Run `stopAutoShowcase()` if needed

4. **For Multiple Takes**
   - Run `stopAutoShowcase()` to reset
   - Run `startAutoShowcase()` again for another take

## Example Scenarios

### Quick Demo (3 seconds per card)
```javascript
startAutoShowcase({
    cardDisplayTime: 3000,
    pauseBetweenCards: 500
})
```

### Detailed Demo (6 seconds per card)
```javascript
startAutoShowcase({
    cardDisplayTime: 6000,
    pauseBetweenCards: 1500
})
```

### Social Media (2 seconds per card, fast)
```javascript
startAutoShowcase({
    cardDisplayTime: 2000,
    pauseBetweenCards: 300
})
```

## Troubleshooting

**Cards not showing overlays?**
- Make sure you're viewing the live website, not a local file
- Check that CSS is loaded properly
- Try refreshing the page

**Showcase moving too fast/slow?**
- Use custom timing options shown above
- Adjust `cardDisplayTime` to your preference

**Want to skip a card?**
- Stop the showcase: `stopAutoShowcase()`
- Manually scroll to desired card
- Resume: `resumeAutoShowcase()`

## Technical Details

The script works by:
1. Detecting all `.model-card` elements on the page
2. Scrolling to each card smoothly
3. Adding a `force-hover` class to trigger the overlay
4. Waiting for the specified display time
5. Moving to the next card
6. Looping back to the first card when complete

The showcase runs in a recursive loop, so it will continue until you stop it with `stopAutoShowcase()`.
