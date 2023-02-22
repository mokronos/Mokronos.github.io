image_dir = '../images';
% Define the signal constellation
labels = {'00','01','10','11'};
coords = [-1-1i,-1+1i , 1+1i , 1-1i];

% plot
scatter(real(coords), imag(coords));
grid on;

% add labels
for i = 1:length(coords)
    text(real(coords(i))+0.1, imag(coords(i))+0.1, labels(i), 'FontSize', 12);
end

% Set the plot limits and axis labels
xlim([-2 2]);
ylim([-2 2]);
xlabel('In-Phase');
ylabel('Quadrature');

% Set the plot title
title('4-QAM Signal Constellation with natural mapping');

% Save the plot as a PNG file
saveas(gcf, fullfile(image_dir, '4_QAM_natural.png'));

% Define the signal constellation
labels = {'00','01','11','10'};
coords = [-1-1i,-1+1i , 1+1i , 1-1i];

% plot
scatter(real(coords), imag(coords));
grid on;

% add labels
for i = 1:length(coords)
    text(real(coords(i))+0.1, imag(coords(i))+0.1, labels(i), 'FontSize', 12);
end

% Set the plot limits and axis labels
xlim([-2 2]);
ylim([-2 2]);
xlabel('In-Phase');
ylabel('Quadrature');

% Set the plot title
title('4-QAM Signal Constellation with gray mapping');

% Save the plot as a PNG file
saveas(gcf, fullfile(image_dir, '4_QAM_gray.png'));