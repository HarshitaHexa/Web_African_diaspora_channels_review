from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:3000")

        # Wait for the main content to load
        expect(page.get_by_role("button", name="START WATCHING")).to_be_visible(timeout=30000)

        # Take a screenshot of the homepage
        page.screenshot(path="jules-scratch/verification/homepage.png")

        # Click the "START WATCHING" button
        page.get_by_role("button", name="START WATCHING").click()

        # Wait for the video player to be visible
        expect(page.locator(".video-js")).to_be_visible(timeout=10000)

        # Take a screenshot of the video player
        page.screenshot(path="jules-scratch/verification/video_player.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)