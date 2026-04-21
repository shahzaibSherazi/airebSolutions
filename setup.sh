#!/bin/bash

# Quick Start Script for Admin Dashboard
# This script sets up and runs both backend and frontend

echo "🚀 Aireb Solutions - Admin Dashboard Quick Start"
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install it first.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js version: $(node -v)${NC}"

# Step 1: Backend Setup
echo -e "\n${YELLOW}Step 1: Setting up Backend...${NC}"
cd backend || exit 1

if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
else
    echo "Backend dependencies already installed"
fi

echo -e "${GREEN}✓ Backend setup complete${NC}"

# Step 2: Frontend Setup
echo -e "\n${YELLOW}Step 2: Setting up Frontend...${NC}"
cd ../frontend || exit 1

if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
else
    echo "Frontend dependencies already installed"
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "Creating .env.local from .env.example..."
    cp .env.example .env.local
fi

echo -e "${GREEN}✓ Frontend setup complete${NC}"

echo -e "\n${GREEN}=====================================${NC}"
echo -e "${GREEN}✓ Setup complete! Ready to run${NC}"
echo -e "${GREEN}=====================================${NC}"

echo -e "\n${YELLOW}To start the application:${NC}"
echo -e "\n  Terminal 1 (Backend):"
echo -e "    cd backend"
echo -e "    npm run dev"
echo -e "\n  Terminal 2 (Frontend):"
echo -e "    cd frontend"
echo -e "    npm run dev"
echo -e "\n${YELLOW}Then visit: http://localhost:5173/admin/login${NC}"
echo -e "\n${YELLOW}Admin Credentials:${NC}"
echo -e "  Email: admin@aireb.com"
echo -e "  Password: password123"
